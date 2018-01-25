import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addEntry } from '../actions/posts';
import '../App.css';

const addPostPage = props => (
  <div>
    <h1>Add Post</h1>
    <PostForm
      onSubmit={post => {
        props.dispatch(addEntry(post));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(addPostPage);
