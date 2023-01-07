```
const BookList = () => {
// 1. prop drilling
const someValue = 'shakeAndBake';
// 2. pass it into a function to use as a prop to send to the Book component
const displayValue = () => {
console.log(someValue);
};
// A. Find a book that matches the id of the book when clicking. First setup the function in the parent component
const getBookID = (id) => {
const book = books.find((book) => book.id === id);
console.log(book);
};

return (
<section className="booklist">
{books.map((book) => {
// 3. use the displayValue as a prop and pass the function in
return (
<Book
{...book}
key={book.id}
displayValue={displayValue}
// B. Pass the function as a prop
getBookID={getBookID}
/>
);
})}
</section>
);
};

// C. Destructure the function getBookID, as well as the id needed in order to reference when the button is clicked
const Book = ({ img, author, title, displayValue, getBookID, id }) => {
return (
<article className="book">
<img src={img} alt={title} />
<h2>{title}</h2>
{/_ 4. Book now uses the prop of display value _/}
<button onClick={displayValue}>Display Title</button>
{/_ D. onClick is setup with a callback function as we need to invoke it with the id passed to the getBookID function. However, if we immediately call it, it will not run as we expect _/}
<button onClick={() => getBookID(id)}>Display Book ID</button>
<h4 className="author">{author}</h4>
{/_ {children} _/}
</article>
);
};
```
