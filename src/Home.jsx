import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([
    { tittle: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { tittle: 'My old website', body: 'lorem ipsum...', author: 'mario', id: 2 },
    { tittle: 'Build website from scratch', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.tittle}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
