import { getPostAggregate } from "js-app-db";

export default async function Posts() {
  const postAggregate = await getPostAggregate();

  return <div>count: {postAggregate.count}</div>;
}
