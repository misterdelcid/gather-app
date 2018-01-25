import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_ENTRY
const addEntry = (
  {
  title = '',
  entry = '',
  category = undefined,
  createdAt = 0
} = {}
) => ({
  type: 'ADD_ENTRY',
  post: {
    id: uuid();
    title,
    entry,
    category,
    createdAt
  }
});

// REMOVE_ENTRY
const removeEntry = ({id} = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

// EDIT_ENTRY
const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_CATEGORY
const sortByCategory = () => ({
  type: 'SORT_BY_CATEGORY',
});

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
      return state.filter({ id } =>  id !== action.id)
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

// filtersReducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'category'
        };
    default:
      return state;
  }
};

// Get visible posts
const getVisiblePosts = (posts, {text, sortBy}) => {
  return posts.filter((post) => {
    const textMatch = post.entry.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.created ? 1: -1;
    }
  })
}

// Store Creation
const store = createStore(
  combineReducers({
    posts: postsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visiblePosts = getVisiblePosts(state.posts, state.filters);

  console.log(visiblePosts);
});
