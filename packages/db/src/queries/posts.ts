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

export async function getPostById(id: string): Promise<Post | undefined> {
  // Artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, timeout));
  return list.find((it) => it.id === id);
}

export async function updatePost(id: string, message: string) {
  const post = list.find((it) => it.id === id);
  if (!post) throw Error("not found");

  post.message = message;
}

export async function createPost(post: Omit<Post, "id" | "likes">) {
  list.push({ ...post, id: uuid(), likes: 0 });
  await db.write();
}

export async function deletePost(id: string) {
  list = list.filter((post) => post.id !== id);
  await db.write();
}

export async function likePost(id: string) {
  const postToUpdate = list.find((post) => post.id === id);
  if (postToUpdate) postToUpdate.likes++;
  await db.write();
}
