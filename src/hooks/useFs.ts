import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import { config } from "../hooks/usePath";
import { join } from "path";

/**
 * 写入json
 * @param name 写入文件名称
 * @param data 数据
 */
export const writeJson = async (name: string, data: any) => {
  const path = join(config, `${name}.json`);

  await writeFile(path, JSON.stringify(data, null, 2));
};

/**
 * 读取json
 * @param name 读取文件名称
 * @returns 文件内容
 */
export const readJson = async (name: string) => {
  const path = join(config, `${name}.json`);

  if (!existsSync(path)) {
    return [];
  }

  const res = await readFile(path);

  return JSON.parse(res.toString());
};
