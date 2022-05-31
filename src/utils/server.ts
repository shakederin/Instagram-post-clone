import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { Server } from "http";
import net from "net";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let server: Server;

export const runServer = async () => {
  app.use(express.static(path.join(__dirname, "../../public")));
  const port = await findPort();
  server = app.listen(port);
  return port;
};

export const closeServer = () => {
  server.close();
};

async function findPort() {
  let port = 8080;
  let isAvailable = false;

  while (!isAvailable) {
    try {
      await isPortTaken(port);
      isAvailable = true;
    } catch (e) {
      port++;
    }
  }
  return port;
}

const isPortTaken = async function (port: number) {
  return new Promise((resolve, reject) => {
    const tester = net
      .createServer()
      .once("error", function (err: any) {
        if (err.code != "EADDRINUSE") reject(err);
        reject("taken");
      })
      .once("listening", function () {
        tester
          .once("close", function () {
            resolve(port);
          })
          .close();
      })
      .listen(port);
  });
};
