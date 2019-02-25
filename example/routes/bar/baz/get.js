const method = 'get';
const url = '/bar/baz';

module.exports = async (fastify) => {
  fastify.get('/', async () => {
    return {method, url};
  });
};
