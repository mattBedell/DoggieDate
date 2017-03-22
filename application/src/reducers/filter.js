export default function filter(state = 'none', action) {
  if (action.type === 'CHANGE_FILTER') {
    return action.filter;
  };
  return state;
}

export const getFilter = (state) => {
  return state.filter
}
