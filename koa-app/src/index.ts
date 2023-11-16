import Koa from "koa";
import Router from "@koa/router";
import View from "koa-views";

const app = new Koa();
const router = new Router();
const render = View(`${process.cwd()}/src/views`, { extension: 'pug'});

const root = async (ctx: any) => {
  await ctx.render('index')
};

router.get("/", root);
app.use(render);
app.use(router.routes());
app.listen(3000);
