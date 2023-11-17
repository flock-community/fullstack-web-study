import Router from "@koa/router";
import { createPost, getPosts } from "js-app-db";
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

const create = async ({ body, request, response, render }: any) => {
  const post: string = request.body.post ?? "no content";

  await createPost({ message: post });
  await render("posts", { posts: await getPosts() });
};

router.get("/", root).post("/posts", create);
app.use(koaBody(parserOpts)).use(render).use(router.routes());
app.listen(3001);
