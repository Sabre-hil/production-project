const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTemplate = require('./schemaTemplate');

const createModel = async (layer, slice) => {
  const resolveModelPath = (...args) => resolveRoot('src', layer, slice, 'model', ...args);

  const createModelDir = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slice'));
      await fs.mkdir(resolveModelPath('services'));
      await fs.mkdir(resolveModelPath('selectors'));
    } catch (error) {
      throw new Error(`Не удалось создать model директорию ${error}`);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slice', `${slice}Slice.ts`),
        reduxSliceTemplate(slice),
      );
    } catch (error) {
      throw new Error(`Не удалось создать redux slice ${error}`);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${slice}Schema.ts`),
        schemaTemplate(firstCharUpperCase(slice)),
      );
    } catch (error) {
      throw new Error(`Не удалось создать types schema ${error}`);
    }
  };

  await createModelDir();
  await createReduxSlice();
  await createSchemaType();
};

module.exports = createModel;
