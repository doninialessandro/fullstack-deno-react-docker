import { RouterContext } from "../../../deps.ts";
import * as launches from "./launches.ts";

const launchesController = () => {
  const getLaunches = (ctx: RouterContext) => {
    ctx.response.body = launches.getAll();
  };

  const getLaunch = (ctx: RouterContext) => {
    if (ctx.params?.id) {
      const launchData = launches.getOne(Number(ctx.params.id));
      if (launchData) {
        ctx.response.body = launchData;
      } else {
        ctx.throw(400, `Launch with ID ${ctx.params.id} doesn't exist.`);
      }
    }
  };

  const deleteLaunch = (ctx: RouterContext) => {
    if (ctx.params?.id) {
      const result = launches.removeOne(Number(ctx.params.id));
      ctx.response.body = { success: result };
    }
  };

  const addLaunch = async (ctx: RouterContext) => {
    const body = await ctx.request.body().value;

    launches.addOne(body);

    ctx.response.body = { success: true };
    ctx.response.status = 201;
  };

  return {
    getLaunches,
    getLaunch,
    deleteLaunch,
    addLaunch,
  };
};

export default launchesController;
