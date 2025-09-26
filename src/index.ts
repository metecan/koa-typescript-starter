import Koa from "koa";
import { router } from "@/routes";
import logger from "./middleware/logger";

const app = new Koa();

const port = 3000;

app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log("server running on :" + port);
});
