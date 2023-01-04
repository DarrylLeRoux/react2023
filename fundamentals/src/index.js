import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71m+Qtq+HrL._AC_UL600_SR600,400_.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim impedit
          libero voluptate natus aut eveniet inventore nostrum distinctio ea
          reiciendis.
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ children, img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 className="author">{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
