import { Suspense } from "react";
import Posts from "./components/posts";

export default async function Home() {
  return (
    <main>
      <h1>Posts</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Posts />
      </Suspense>
    </main>
  );
}
