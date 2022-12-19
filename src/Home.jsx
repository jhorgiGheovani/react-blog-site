import React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
export default function Home() {
  const [blogs, setBlogs] = useState([
    { tittle: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { tittle: 'My old website', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { tittle: 'Build website from scratch', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const [name, setName] = useState('mario');
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id); //only show if it true
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect run');
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} tittle="All Blogs!" handleDelete={handleDelete} />
      <p>{name}</p>
      <button onClick={() => setName('jhorgi')}>Change Name</button>
    </div>
  );
}
