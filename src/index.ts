import Koa from 'koa';
import { router } from '@/routes';
import logger from '@/middleware/logger';
import CONFIG from '@/lib/config';
import { bodyParser } from '@koa/bodyparser';

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(CONFIG.PORT, () => {
  console.log('server running on :' + CONFIG.PORT);
});
