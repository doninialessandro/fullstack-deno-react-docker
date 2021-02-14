import { RouterContext } from "../../../deps.ts";
import * as planets from "./planets.ts";

const planetsController = () => {
  const getPlanets = async (ctx: RouterContext) => {
    ctx.response.body = await planets.getAll();
  };

  return {
    getPlanets,
  };
};

export default planetsController;
