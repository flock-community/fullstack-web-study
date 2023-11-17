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
  urlencoded: true,
};

const root = async (ctx: any) => {
  await ctx.render("index", { posts: await getPosts() });
};

const create = async ({ body, request, response, render }: any) => {
  console.log(request, response);
  const post = body ?? "no content";

  await createPost(post);
  await render("post", { posts: await getPosts() });
};

router.get("/", root).post("/posts", create);
app.use(koaBody(parserOpts)).use(render).use(router.routes());
app.listen(3001);
