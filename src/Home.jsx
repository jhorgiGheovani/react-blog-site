import React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
export default function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return <div className="home">{blogs && <BlogList blogs={blogs} tittle="All Blogs!" />}</div>;
}
