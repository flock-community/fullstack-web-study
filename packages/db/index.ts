import { JSONPreset } from "lowdb/node";
import path from "path";

interface DefaultData {
  posts: string[];
}

const defaultData: DefaultData = { posts: [] };
const db = await JSONPreset<DefaultData>(
  path.resolve(process.cwd(), "../db/db.json"),
  defaultData
);

export async function getPosts() {
  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.data.posts;
}

export async function createPost(post: string) {
  db.data.posts.push(post);
  await db.write();
}
