const Book = ({ img, author, title, index }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 className="author">{author}</h4>
      <span className="number">{`# ${index}`}</span>
      {/* {children} */}
    </article>
  );
};

export default Book;
