import { SubmitButton } from "./submit-button";
import { createPostAction } from "../actions";

export default async function PostsForm() {
  return (
    <form action={createPostAction}>
      <input type="text" name="post" />
      <SubmitButton />
    </form>
  );
}
