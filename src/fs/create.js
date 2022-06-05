import { writeFile } from "fs/promises";
import path from "path";

const PATH_NAME = path.join("src", "fs", "files", "fresh.txt");

export const create = async () => {
  try {
    await writeFile(PATH_NAME, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    if (err.code === "EEXIST") throw new Error("FS operation failed");
  }
};

create();
