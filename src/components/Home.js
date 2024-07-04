import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import axios from 'axios';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:5001/post/get-posts").then(res=>{
        setPosts(res.data)
        console.log('res.data: ', res.data);
    })
  }, [isDeleted]);

  const handleDelete = (id) => {
    axios.delete("http://localhost:5001/post/delete/"+id).then(res=>{
       setIsDeleted(true)
    })
  };

  return (
    <div className="home-page">
        <div className='' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <h2>Recent Posts</h2>
      <button className='edit-button' onClick={()=>{
        window.location.href="/create"
      }}>
        Create Post

      </button>

        </div>
      <PostList posts={posts} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;