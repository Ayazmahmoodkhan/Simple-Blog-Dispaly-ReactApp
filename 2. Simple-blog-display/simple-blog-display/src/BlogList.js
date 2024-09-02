import React from 'react';
import BlogPost from './BlogPost';
import posts from './data/posts.json';

function BlogList() {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default BlogList;

