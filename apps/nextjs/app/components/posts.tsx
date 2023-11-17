import { getPosts } from "js-app-db";
import PostDeleteButton from "./post-delete-button";
import PostLikeButton from "./post-like-button";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} style={{ display: "flex", gap: "8px" }}>
          <span>{post.message}</span>
          <span>{post.likes}</span>
          <PostDeleteButton id={post.id} />
          <PostLikeButton id={post.id} />
        </li>
      ))}
    </ul>
  );
}
