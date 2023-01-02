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
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg"
      alt="Atomic Habits"
    />
  );
};

const Title = () => {
  return <h2>Atomic Habits</h2>;
};

const Author = () => {
  return <h4>James Clear</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
