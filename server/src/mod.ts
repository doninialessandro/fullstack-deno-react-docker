import { Application } from "../deps.ts";
import { loggerSetup, serverListener } from "./startup/index.ts";
import { errorHandler, responseTime, routes } from "./middleware/index.ts";

const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") || "5000", 10);

await loggerSetup();

errorHandler(app);
responseTime(app);
routes(app);

if (import.meta.main) {
  serverListener(app, PORT);
}
