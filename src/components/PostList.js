import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import getVisiblePosts from '../selectors/posts';
import '../App.css';

const PostList = props => (
  <div>
    {props.posts.map(post => {
      return <PostListItem key={post.id} {...post} />
      })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: getVisiblePosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(PostList);
