"use client";

import { useFormStatus } from "react-dom";
import { likePostAction } from "../actions";

export default function PostLikeButton({ id }: { id: string }) {
  const { pending } = useFormStatus();

  return (
    <form action={likePostAction}>
      <button type="submit" aria-disabled={pending}>
        like
      </button>
      <input type="hidden" name="id" value={id} />
    </form>
  );
}
