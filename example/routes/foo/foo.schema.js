module.exports = async (fastify, {prefix}) => {
  fastify.addSchema({
    $id: [prefix, 'foo'].join('/'),
    type: 'object',
    properties: {
      foo: 'string',
    },
  });
};
