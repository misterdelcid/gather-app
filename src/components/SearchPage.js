import React from 'react';
import PostListFilters from './PostListFilters';
import PostList from './PostList';


const searchPage = () => (
  <div>
    <PostListFilters />
    <PostList />
  </div>
);

export default searchPage;
