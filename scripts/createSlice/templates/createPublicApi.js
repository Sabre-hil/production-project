const fs = require('fs/promises');
const firstCharUpperCase = require('../firstCharUpperCase');
const resolveRoot = require('../resolveRoot');
const createPublicApiTemplate = require('./createPublicApiTemplate');

const createPublicApi = async (layer, slice) => {
  const resolvePublicApiPath = (...args) => resolveRoot('src', layer, slice, ...args);

  try {
    const componentName = firstCharUpperCase(slice);

    await fs.writeFile(
      resolvePublicApiPath('index.ts'),
      createPublicApiTemplate(componentName, slice),
    );
  } catch (error) {
    throw new Error(`Не удалось создать public api ${error}`);
  }
};

module.exports = createPublicApi;
