"use server";

import { createPost, deletePost, likePost } from "js-app-db";
import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
  const post = formData.get("post") as string;

  await createPost({ message: post });
  revalidatePath("/");
}

export async function deletePostAction(formData: FormData) {
  const id = formData.get("id") as string;

  await deletePost(id);
  revalidatePath("/");
}

export async function likePostAction(formData: FormData) {
  const id = formData.get("id") as string;

  await likePost(id);
  revalidatePath("/");
}
