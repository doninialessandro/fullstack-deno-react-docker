import { log } from "../../deps.ts";

export const loggerSetup = async () => {
  log.info("📝 Log: Minimum level set to INFO");
  return await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler("INFO"),
    },
    loggers: {
      default: {
        level: "INFO",
        handlers: ["console"],
      },
    },
  });
};
