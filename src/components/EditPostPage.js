import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { editEntry, removeEntry } from '../actions/posts';
import '../App.css';

const editPostPage = props => (
  <div>
    <h1>Edit Post</h1>
    <PostForm
      post={props.post}
      onSubmit={post=> {
        props.dispatch(editEntry(props.post.id, post));
        props.history.push('/');
      }}
    />
    <button
      onClick={post => {
      props.dispatch(removeEntry({id: props.post.id}));
      props.history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(editPostPage);
