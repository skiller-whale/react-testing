import { createRoot } from "react-dom/client";
import App from "./App";

const response = await fetch("/api/trips");
const { trips } = await response.json();

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App trips={trips} />);
