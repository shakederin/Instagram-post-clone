import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config = {
  mode: "production",
  entry: "./dist/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
export default config;
