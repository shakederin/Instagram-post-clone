import express from "express";
import { fileURLToPath } from "url";
import path from "path";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8080;

// app.use(express.static(path.join(__dirname, "../../dist/main.js")));
app.use(express.static(path.join(__dirname, "../../public")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
