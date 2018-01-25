// Posts Reducers
const postsReducerDefaultState = [];

const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [
        action.post,
        ...state
      ]
    case 'REMOVE_ENTRY':
      return state.filter(({ id }) =>  id !== action.id)
    case 'EDIT_ENTRY':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          }
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

export default postsReducer;
