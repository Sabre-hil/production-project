const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const slice = process.argv[3];

const layers = ['pages', 'features', 'entities'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!slice) {
  throw new Error('Укажите слайз');
}

createTemplate(layer, slice);
