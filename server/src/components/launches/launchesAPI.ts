import { Router } from "../../../deps.ts";
import launchesController from "./launchesController.ts";

const launchesAPI = (baseRoute: string, router: Router) => {
  router.get(
    `${baseRoute}`,
    launchesController().getLaunches,
  );

  router.get(
    `${baseRoute}/:id`,
    launchesController().getLaunch,
  );

  router.delete(
    `${baseRoute}/:id`,
    launchesController().deleteLaunch,
  );

  router.post(
    `${baseRoute}`,
    launchesController().addLaunch,
  );

  return router;
};

export default launchesAPI;
