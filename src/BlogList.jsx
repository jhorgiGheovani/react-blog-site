import React from 'react';
export default function BlogList({ blogs }) {
  //   const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.tittle}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
