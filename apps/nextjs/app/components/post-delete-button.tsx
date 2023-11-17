"use client";

import { useFormStatus } from "react-dom";
import { deletePostAction } from "../actions";

export default function PostDeleteButton({ id }: { id: string }) {
  const { pending } = useFormStatus();

  return (
    <form action={deletePostAction}>
      <button type="submit" aria-disabled={pending}>
        {pending ? "Deleting..." : "Delete"}
      </button>
      <input type="hidden" name="id" value={id} />
    </form>
  );
}
