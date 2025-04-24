const fs = require('fs/promises');
const resolvePath = require('../resolveRoot');
const createUI = require('./createUI');
const firstCharUpperCase = require('../firstCharUpperCase');
const createModel = require('./createModel');
const createPublicApi = require('./createPublicApi');

const createTemplate = async (layer, slice) => {
  try {
    const sliceName = firstCharUpperCase(slice);
    await fs.mkdir(resolvePath('src', layer, sliceName));
  } catch (error) {
    throw new Error(`Произошла ошибка ${error}`);
  }

  await createUI(layer, slice);
  await createModel(layer, slice);
  await createPublicApi(layer, slice);
};

module.exports = createTemplate;
