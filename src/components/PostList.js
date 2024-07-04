import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, onDelete }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;