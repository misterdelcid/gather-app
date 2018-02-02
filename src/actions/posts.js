import database from '../firebase/firebase';

// ADD_ENTRY
export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      post = '',
      category = '',
      createdAt = 0
    } = postData;
    const entry = { title, post, category, createdAt };

    database.ref('posts').push(entry).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...entry
      }));
    });
  };
};

// REMOVE_POST
export const removePost = ({id} = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({id}= {}) => {
  return (dispatch) => {
    database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost({id}));
    });
  };
};

// EDIT_POST
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch) => {
    return database.ref(`posts/${id}`).update(updates).then(() => {
      dispatch(editPost(id, updates));
    });
  };
};

// SET_POSTS
export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
});

export const startSetPosts = () => {
  return (dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setPosts(posts));
    });
  };
};
