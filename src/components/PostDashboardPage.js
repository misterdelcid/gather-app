import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';
import '../App.css';

const postDashboardPage = () => (
  <div>
    <PostListFilters />
    <PostList />
  </div>
);

export default postDashboardPage;
