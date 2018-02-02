import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../App.css';

const PostListItem = ({ id, title, post, createdAt}) => (
  <Link to={`/edit/${id}`} style={{textDecoration: 'none'}}>
  <div className="post-list-item">
    <h3 className="post-title">{title}</h3>
    <p className="post-date">{moment(createdAt).calendar()}</p>
    <p className="post-post">{post.length > 165 ? `${post.substring(0,165)} ...`: post}</p>
  </div>
  <div className="post-hover-overlay"><i className="far fa-edit"></i><span>Edit</span></div>
  </Link>
);

export default PostListItem;
