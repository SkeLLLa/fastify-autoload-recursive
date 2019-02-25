module.exports = async (fastify, {prefix}) => {
  fastify.addSchema({
    $id: [prefix, 'post'].join('/'),
    type: 'object',
    required: ['baz'],
    properties: {
      baz: {type: 'number'},
    },
    additionalProperties: false,
  });
};
