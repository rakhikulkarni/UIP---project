import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create" className="create-button">Create Post</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;