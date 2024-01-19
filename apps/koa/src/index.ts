import Router from "@koa/router";
import { createPost, deletePost, getPosts, likePost, getPostById, updatePost } from "js-app-db";
import Koa from "koa";
import type { KoaBodyMiddlewareOptions } from "koa-body";
import { koaBody } from "koa-body";
import View from "koa-views";

const app = new Koa();
const router = new Router();
const render = View(`${process.cwd()}/src/views`, { extension: "pug" });

const parserOpts: Partial<KoaBodyMiddlewareOptions> = {
  multipart: true,
};

const root = async (ctx: any) => {
  await ctx.render("index", { posts: await getPosts() });
};

const list = async ({ render }: any) => {
  await render("posts", { posts: await getPosts() });
};

const create = async ({ body, request, response, render }: any) => {
  const post: string = request.body.post ?? "no content";

  await createPost({ message: post });
  await render("posts", { posts: await getPosts(), swap: true });
};

const edit = async ({ request, render }: any) => {
  const { id } = request.params;

  await render("post", { post: await getPostById(id) });
};

const update = async ({ request, render, redirect }: any) => {
  const { id } = request.params;
  const { message } = request.body;
  updatePost(id, message);
  await render("posts", { posts: await getPosts() });
};

const remove = async ({ request, render }: any) => {
  const id: string = request.params.id;
  await deletePost(id);
  await render("posts", { posts: await getPosts(), swap: true });
};

const createLike = async ({ request, render }: any) => {
  const postId: string = request.params.postId;
  await likePost(postId);
  await render("posts", { posts: await getPosts() });
};

router
  .get("/", root)
  .get("/posts", list)
  .post("/posts", create)
  .get("/posts/:id/edit", edit)
  .put("/posts/:id", update)
  .delete("/posts/:id", remove)
  .post("/likes/:postId", createLike);
app.use(koaBody(parserOpts)).use(render).use(router.routes());
app.listen(3001);
