FROM node:20.13.0

WORKDIR /app/exercises
EXPOSE 3500
ENTRYPOINT ["npm"]

COPY package*.json .
RUN npm i

COPY .eslintrc.cjs .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

CMD ["start"]
