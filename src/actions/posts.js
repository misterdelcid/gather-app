import uuid from 'uuid';

// ADD_ENTRY
export const addEntry = (
  {
  title = '',
  entry = '',
  category = undefined,
  createdAt = 0
} = {}
) => ({
  type: 'ADD_ENTRY',
  post: {
    id: uuid(),
    title,
    entry,
    category,
    createdAt
  }
});

// REMOVE_ENTRY
export const removeEntry = ({id} = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

// EDIT_ENTRY
export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});
