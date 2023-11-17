import type { Low } from "lowdb";
import { JSONPreset } from "lowdb/node";
import path from "node:path";
import type { Posts } from "./src/models/posts.js";

const defaultData: Posts = { list: [] };

// @ts-ignore
export const db = await JSONPreset<Posts>(
  path.resolve(process.cwd(), "db.json"),
  defaultData,
);
