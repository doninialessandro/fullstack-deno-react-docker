import { info } from "https://deno.land/std@0.86.0/log/mod.ts";
import { Application, log } from "../../deps.ts";

export const serverListener = async (app: Application, port: number) => {
  log.info(`🚀 Oak: App listening on port ${port}`);
  await app.listen({
    port: port,
  });
};
