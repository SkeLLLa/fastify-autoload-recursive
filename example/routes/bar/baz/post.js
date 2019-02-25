const method = 'post';
const url = '/bar/baz';

module.exports = async (fastify) => {
  fastify.post(
    '/',
    {schema: {body: 'bar/baz/post#'}},
    async (req) => {
      console.log(111, req.body);
      return {method, url};
    }
  );
};
