import Router from "@koa/router";
import { RegisterController } from "./modules/auth/auth.controller";
import { PATHS } from "./lib/paths";

export const router = new Router();

// Auth Routes
router.post(PATHS.AUTH.REGISTER, RegisterController);
