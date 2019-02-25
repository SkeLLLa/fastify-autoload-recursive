const method = 'get';
const url = '/foo';

module.exports = async (fastify) => {
  fastify.get('/', async () => {
    return {method, url};
  });
};
