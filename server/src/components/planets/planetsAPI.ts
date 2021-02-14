import { Router } from "../../../deps.ts";
import planetsController from "./planetsController.ts";

const planetsAPI = (baseRoute: string, router: Router) => {
  router.get(
    `${baseRoute}`,
    planetsController().getPlanets,
  );

  return router;
};

export default planetsAPI;
