import { JSONPreset } from "lowdb/node";

const defaultData = { posts: [] };
export const db = await JSONPreset("db.json", defaultData);
