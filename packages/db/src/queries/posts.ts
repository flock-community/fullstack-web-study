import { db } from "../../db.js";
import type { Post } from "../models/posts.js";
import { v4 as uuid } from "uuid";
import "dotenv/config";

let { list } = db?.data;
const timeout = Number(process.env.TIMEOUT) ?? 0;

export async function getPosts() {
  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, timeout));
  return list;
}

export async function createPost(post: Omit<Post, "id" | "likes">) {
  list.push({ ...post, id: uuid(), likes: 0 });
  await db.write();
}

export async function deletePost(id: string) {
  list = list.filter((post) => post.id !== id);
  await db.write();
}
