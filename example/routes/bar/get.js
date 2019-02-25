const method = 'get';
const url = '/bar';

module.exports = async (fastify) => {
  fastify.get('/', async () => {
    return {method, url};
  });
};
