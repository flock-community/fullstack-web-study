import { getPosts } from "../../db";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post}>{post}</li>
      ))}
    </ul>
  );
}
