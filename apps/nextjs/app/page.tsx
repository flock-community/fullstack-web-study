import { Suspense } from "react";
import Posts from "./components/posts";
import PostForm from "./components/post-form";

export default async function Home() {
  return (
    <main>
      <h1>Posts</h1>
      <PostForm />
      <Suspense fallback={<span>Loading...</span>}>
        <Posts />
      </Suspense>
    </main>
  );
}
