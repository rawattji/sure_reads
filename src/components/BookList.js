import React from 'react';
import BookCard from './BookCard';
// import '../styles/BookList.css';

const BookList = ({ books, onDetails }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDetails={onDetails} />
      ))}
    </div>
  );
};

export default BookList;
