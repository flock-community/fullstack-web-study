import { Suspense } from "react";
import Posts from "./components/posts";
import PostsCount from "./components/posts-count";
import PostForm from "./components/post-form";

export default async function Home() {
  return (
    <main>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h1>Posts</h1>
        <Suspense fallback={null}>
          <PostsCount />
        </Suspense>
      </div>

      <PostForm />
      <Suspense fallback={<span>Loading...</span>}>
        <Posts />
      </Suspense>
    </main>
  );
}
