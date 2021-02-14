import { Router } from "../../../deps.ts";
import welcomeControllers from "./welcomeController.ts";

const welcomeAPI = (baseRoute: string, router: Router) => {
  router.get(
    `${baseRoute}`,
    welcomeControllers().getWelcome,
  );

  return router;
};

export default welcomeAPI;
