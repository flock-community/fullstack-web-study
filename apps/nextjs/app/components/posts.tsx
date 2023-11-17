import { getPosts } from "js-app-db";
import PostDeleteButton from "./post-delete-button";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} style={{ display: "flex", gap: "8px" }}>
          <span>{post.message}</span>
          <PostDeleteButton id={post.id} />
        </li>
      ))}
    </ul>
  );
}
