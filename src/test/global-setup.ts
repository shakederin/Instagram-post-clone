import express from "express";
import { fileURLToPath } from "url";
import path from "path";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8080;

export const runServer = () => {
  app.use(express.static(path.join(__dirname, "../../public")));

  app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
};
