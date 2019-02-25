const fastify = require('fastify')();
// const autoload = require('fastify-autoload-recursive');
const autoload = require('../dist');

fastify.register(autoload, {dir: __dirname + '/routes', autoPrefix: true});

(async () => {
  await fastify.ready();
  await fastify.listen(3000);
  console.log('App started');
})();
