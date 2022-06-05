import fs, { readdir } from "fs/promises";
import path from "path";

const PATH = path.join("src", "fs", "files");
const NEW_NAME = "properFilenameс.md";
const OLD_NAME = "wrongFilename.txt";
const NEW_PATH = path.join("src", "fs", "files", NEW_NAME);
const OLD_PATH = path.join("src", "fs", "files", OLD_NAME);

export const rename = async () => {
  const files = await readdir(PATH);
  if (files.includes(NEW_NAME) || !files.includes(OLD_NAME)) {
    throw new Error("FS operation failed");
  }
  await fs.rename(OLD_PATH, NEW_PATH);
};
rename();
