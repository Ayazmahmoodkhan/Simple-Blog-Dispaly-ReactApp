import React, { useState } from 'react';

function BlogPost({ title, author, content, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (isExpanded) {
      return content.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    } else {
      // Show only the first paragraph or a truncated version
      return (
        <p className='content'>
          {content[0].slice(0, 150)}...
          <span className="read-more" onClick={toggleReadMore}>
            Read More
          </span>
        </p>
      );
    }
  };

  return (
    <div className="full-screen-container">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      {renderContent()}
      {isExpanded && (
        <span className="read-more" onClick={toggleReadMore}>
          Read Less
        </span>
      )}
      <p className="author">By: {author}</p>
    </div>
  );
}

export default BlogPost;

      
    
