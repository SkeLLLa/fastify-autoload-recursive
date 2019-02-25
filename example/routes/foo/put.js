const method = 'put';
const url = '/foo';

module.exports = async (fastify) => {
  fastify.put('/', async () => {
    return {method, url};
  });
};
