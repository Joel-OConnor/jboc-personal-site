export const ideasReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return state = [action.idea, ...state];
    default:
      return state;
  }
}