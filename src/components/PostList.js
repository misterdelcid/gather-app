import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostListItem from './PostListItem';
import editPostPage from './EditPostPage';
import getVisiblePosts from '../selectors/posts';
import '../App.css';

const PostList = props => (
  <div className="main">
    <h2>Notes</h2>
    <InfiniteScroll className="sidebar-preview" height="80vh">
      {props.posts.map(post => {
        return <PostListItem key={post.id} {...post} />
        })}
    </InfiniteScroll>
    <editPostPage />
  </div>
);

const mapStateToProps = state => {
  return {
    posts: getVisiblePosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(PostList);
