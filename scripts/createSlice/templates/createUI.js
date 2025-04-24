const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const reactComponentTemplate = require('./reactComponentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');

const createUI = async (layer, slice) => {
  const resolveModelPath = (...args) => resolveRoot('src', layer, slice, 'ui', ...args);

  const createUiDir = async () => {
    try {
      await fs.mkdir(resolveModelPath());
    } catch (error) {
      throw new Error(`Не удалось создать ui директорию ${error}`);
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(slice);
      await fs.mkdir(resolveModelPath((componentName)));
      await fs.writeFile(
        resolveModelPath(componentName, `${componentName}.tsx`),
        reactComponentTemplate(componentName),
      );
      await fs.writeFile(
        resolveModelPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveModelPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  await createUiDir();
  await createComponent();
};

module.exports = createUI;
