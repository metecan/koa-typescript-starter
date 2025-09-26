import { Ctx, Next } from "@/types/router.types";

export const RegisterController = async (ctx: Ctx, next: Next) => {
  ctx.body = "Register Endpoint";

  await next();
};
