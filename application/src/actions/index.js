import { fetchGlobalDogs } from './dogs.js';
import { fetchAttributes, fetchAttributesById } from './attributes.js';
import { setViewFilter, setParamFilter } from './filters.js';
import { fetchGlobalMembers } from './members.js'
// This importing and exporting is for when things start to scale up
export {
  fetchGlobalDogs,
  fetchAttributes,
  fetchAttributesById,
  fetchGlobalMembers,
  setViewFilter,
  setParamFilter,
};
