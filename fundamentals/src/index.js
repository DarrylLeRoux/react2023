import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = 'Atomic Habits';
  const author = 'James Clear';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg"
        alt="Atomic Habits"
      />
      <h2>{title}</h2>
      <h4 className="author">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
