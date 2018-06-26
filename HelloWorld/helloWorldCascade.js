require('babel-core/register');
const responseTime = require('koa-response-time');
const logger = require('koa-logger')
const Koa = require('koa');

const app = new Koa();


/* x-response-time
  Koa invoke "downstream", then control flows back "upstream"
  app.use(async (ctx, next) => {
     const start = Date.now();
     await next();
     const ms = Date.now() - start;
     ctx.set('X-Response-Time', `${ms}ms`);
  });
*/

 app.use(responseTime());

// logger

// Param str is output string with ANSI Color, and you can get pure text with other modules like strip-ansi
// Param args is a array by [format, method, url, status, time, length]
app.use(logger((str, [format, method, url, status, ...rest]) => {
  console.log(`${method} - ${url} -- ${status}`);
}))

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
