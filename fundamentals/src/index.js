import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';

const author = 'James Clear';
const title = 'Atomic Habits';
const img = './images/book-1.webp';

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
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 className="author">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
