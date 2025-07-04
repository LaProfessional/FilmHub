FROM node:20.17.0

WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src .
CMD ["sh", "-c", "npm i && npm run migration && npm run dev"]
