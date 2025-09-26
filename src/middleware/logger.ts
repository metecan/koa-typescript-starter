import { Ctx, Next } from "@/types/router.types";

const logger = (format?: string) => {
  format = format || ":method :url :status";

  return async (ctx: Ctx, next: Next) => {
    const str = format
      .replace(":method", ctx.method)
      .replace(":url", ctx.url)
      .replace(":status", ctx.status.toString());

    console.log(str);
    await next();
  };
};

export default logger;
