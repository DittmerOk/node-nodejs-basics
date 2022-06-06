import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
const __filename = path.dirname(import.meta.url);
const __dirname = path.dirname(__filename);
import "./files/c.js";
import fileA from "./files/a.json" assert { type: "json" };
import fileB from "./files/b.json" assert { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = fileA;
} else {
  unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
