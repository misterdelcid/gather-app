import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startRemovePost, startEditPost } from '../actions/posts';
import '../App.css';

const EditPostPage = props => (
  <div className="main">
    <PostForm
      post={props.post}
      onSubmit={post=> {
        props.startEditPost(props.post.id, post);
        props.history.push('/');
      }}
      onCancel={e => {
        e.preventDefault();
        props.history.push('/');
      }}
      onDelete={e => {
        props.startRemovePost({ id: props.post.id });
        props.history.push('/');
      }}
    />
    {/* <button className="remove-button" onClick={() => {
      props.startRemovePost({ id: props.post.id });
      props.history.push('/');
    }}>Remove</button> */}
  </div>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
  });

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
