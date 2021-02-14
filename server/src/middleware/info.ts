import { Application, log } from "../../deps.ts";

export const responseTime = (app: Application) => {
  app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    log.info(`⏱️  Time: ${ctx.request.method} ${ctx.request.url}: ${time}`);
  });

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta}ms`);
  });
};
