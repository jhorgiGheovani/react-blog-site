import React from 'react';
import { useState } from 'react';
import BlogList from './BlogList';
export default function Home() {
  const [blogs, setBlogs] = useState([
    { tittle: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { tittle: 'My old website', body: 'lorem ipsum...', author: 'mario', id: 2 },
    { tittle: 'Build website from scratch', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
}
