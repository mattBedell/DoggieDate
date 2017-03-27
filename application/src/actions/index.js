import { fetchGlobalDogs } from './dogs.js';
import { fetchAttributes, fetchAttributesById } from './attributes.js';
// This importing and exporting is for when things start to scale up
export {
  fetchGlobalDogs,
  fetchAttributes,
  fetchAttributesById,
};
