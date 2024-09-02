import React from 'react';
import BlogList from './BlogList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1>Simple Blog Display</h1>
      <BlogList />
    </div>
  );
}
document.addEventListener('DOMContentLoaded', function() {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const moreContent = this.previousElementSibling;
          if (moreContent.style.display === "none") {
              moreContent.style.display = "block";
              this.textContent = "Read Less";
          } else {
              moreContent.style.display = "none";
              this.textContent = "Read More";
          }
      });
  });
});

export default App;