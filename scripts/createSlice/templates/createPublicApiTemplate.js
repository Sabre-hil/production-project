module.exports = (slice, sliceSmall) => `export { ${slice} } from './ui/${slice}/${slice}';
export { ${slice}Schema } from './model/types/${sliceSmall}Schema';`;
