import React from 'react';
import { Link } from 'react-router-dom';
export default function BlogList({ blogs, tittle }) {
  //   const blogs = props.blogs;
  return (
    <div>
      <h2>{tittle}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
