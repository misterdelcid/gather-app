import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PostListItem = ({ id, title, entry}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>

    <p>{entry}</p>

  </div>
);

export default PostListItem;
