import React from 'react';
import ReactDOM from 'react-dom/client';

import books from './books';
import Book from './Book';

// styles
import './index.css';

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // 3. use the displayValue as a prop and pass the function in
          return <Book {...book} key={book.id} index={index + 1} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
