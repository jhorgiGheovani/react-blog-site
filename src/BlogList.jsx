import React from 'react';
export default function BlogList({ blogs, tittle }) {
  //   const blogs = props.blogs;
  return (
    <div>
      <h2>{tittle}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.tittle}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
