import React from 'react';
import './App.css';

const EntryList = props =>
<aside className="sidebar-preview">
  <ul>
  {props.posts.map((post) => (
    <a href="#"><li>
      <h3>{post.title}</h3>
      <p>{post.entry}</p>
    </li></a>
  ))
}
  </ul>
</aside>;

export default EntryList;
