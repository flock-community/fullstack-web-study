"use server";

import { createPost } from "js-app-db";
import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
  const post = formData.get("post") as string;

  await createPost({ message: post });
  revalidatePath("/");
}
