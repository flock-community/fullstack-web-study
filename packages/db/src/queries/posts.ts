import { db } from "../../db.js";
import type { Post } from "../models/posts.js";

const { list } = db.data;

export async function getPosts() {
  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return list;
}

export async function createPost(post: Post) {
  list.push(post);
  await db.write();
}
