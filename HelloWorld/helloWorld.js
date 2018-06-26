require('babel-core/register');
const Koa = require('koa');
const app = new Koa();

//koa app.use returns generator function providing ctx context and next() args

app.use(async ctx => {
  //ctx provides context object representing request and response objects per req
  ctx.body = ctx;
});

app.listen(3000);
