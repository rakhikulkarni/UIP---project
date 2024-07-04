import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post, onDelete }) {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p className="post-content">{post.postcontent.substring(0, 100)}...</p>
      {/* <p className="post-author">By: {post.author}</p> */}
      <div className="post-keywords">
        {post.keywords.split(',').map(k => k.trim()).map((keyword, index) => (
          <span key={index} className="keyword">{keyword}</span>
        ))}
      </div>
      <div className="post-actions">
        <Link to={`/edit/${post._id}`} className="edit-button">Edit</Link>
        <button onClick={() => onDelete(post._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default PostItem;