import { JSONPreset } from "lowdb/node";

const defaultData = { posts: [] };
export const db = await JSONPreset("db.json", defaultData);

export async function getPosts(): Promise<string[]> {
  return new Promise((resolve) => {
    // Artificial delay to simulate network latency
    setTimeout(() => resolve(db.data.posts), 3000);
  });
}
