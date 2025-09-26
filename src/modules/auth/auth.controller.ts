import { Ctx, Next } from '@/types/router.types';

export const RegisterController = async (ctx: Ctx, next: Next) => {
  console.log('Request Body:', ctx.request.body);

  await next();
};
