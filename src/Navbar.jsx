import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Jhorgi Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
}
