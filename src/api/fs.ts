import { join } from "path";
import { existsSync } from "fs";
import { writeFile, readFile, mkdir } from "fs/promises";
import { resources } from "./path";

export const write = async (name: string, data: string) => {
  if (!existsSync(resources)) {
    await mkdir(resources);
  }

  const path = join(resources, `${name}.json`);

  await writeFile(path, data);
};

export const read = async (name: string) => {
  const path = join(resources, `${name}.json`);

  if (!existsSync(path)) {
    return "";
  }

  const res = await readFile(path);

  return res.toString();
};

//写入位置
export const writePosition = (name: string, data: any) => {
  const path = `${name}Position`;
  write(path, JSON.stringify(data));
};

//读取位置
export const readPosition = async (
  name: string
): Promise<Record<string, number[]>> => {
  const path = `${name}Position`;
  const res = await read(path);

  if (!res) {
    return {};
  }

  return JSON.parse(res);
};
