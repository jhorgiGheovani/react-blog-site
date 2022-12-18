import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Jhorgi Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}
