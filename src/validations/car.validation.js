const ajvInstance = require('./ajv.instance');

const schema = {
  type: 'object',
  properties: {
    brand: { type: 'string' },
    color: { type: 'string' },
    model: { type: 'string' },
    modelYear: { type: 'number' },
    type: {
      type: 'string',
      enum: ['manual', 'automatic'],
    },
  },
  required: ['brand', 'color', 'model', 'modelYear', 'type'],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);
