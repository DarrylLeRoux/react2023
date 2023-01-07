import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71m+Qtq+HrL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

const BookList = () => {
  // 1. prop drilling
  const someValue = 'shakeAndBake';
  // 2. pass it into a function to use as a prop to send to the Book component
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        // 3. use the displayValue as a prop and pass the function in
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = ({ img, author, title, displayValue }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* 4. Book now uses the prop of display value */}
      <button onClick={displayValue}>Display Title</button>
      <h4 className="author">{author}</h4>
      {/* {children} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
