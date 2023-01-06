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
  return (
    <section className="booklist">
      <EventExamples />

      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  let btnClick = '';
  const handleFormInput = (e) => {
    btnClick = e.target.value;
  };

  const handleClick = () => {
    alert(btnClick);
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleClick}>Click Me</button>
    </section>
  );
};

const Book = ({ img, author, title }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 className="author">{author}</h4>
      {/* {children} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
