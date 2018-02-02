import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts';
import '../App.css';

const addPostPage = props => (
  <div className="main">
    <PostForm
      onSubmit={post => {
        props.startAddPost(post);
        props.history.push('/');
      }}
      onCancel={e => {
        e.preventDefault();
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(addPostPage);
