import express from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import api from "./api";

const app = express();
const port = 3500;

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true },
});

const loadPage = async (page: "Index" | "Module") => {
  const module = await vite.ssrLoadModule(
    resolve("server/pages", `${page}.tsx`),
  );
  return module.default;
};

const generateHTML = async (
  url: string,
  content: string,
  module?: string,
  language?: "js" | "ts",
) => {
  const template = await readFile(resolve("server", "index.html"), "utf-8");
  const scriptTag =
    module && language
      ? `<script type="module" src="/src_${language}/${module}/index.${language}x"></script>`
      : "";
  const html = template
    .replace("<!--scriptTag-->", scriptTag)
    .replace("<!--ssrContent-->", content);
  return await vite.transformIndexHtml(url, html);
};

app.use(vite.middlewares);

app.use("/api", api);

app.get("/", async (req, res) => {
  const Index = await loadPage("Index");
  const ssrContent = renderToStaticMarkup(<Index />);
  const html = await generateHTML(req.url, ssrContent);
  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

app.get("/js/:module", async (req, res) => {
  const Module = await loadPage("Module");
  const ssrContent = renderToStaticMarkup(
    <Module language="js" moduleKey={req.params.module} />,
  );
  const html = await generateHTML(req.url, ssrContent, req.params.module, "js");
  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

app.get("/ts/:module", async (req, res) => {
  const Module = await loadPage("Module");
  const ssrContent = renderToStaticMarkup(
    <Module language="ts" moduleKey={req.params.module} />,
  );
  const html = await generateHTML(req.url, ssrContent, req.params.module, "ts");
  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
