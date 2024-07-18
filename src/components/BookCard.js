import React from 'react';
// import '../styles/BookCard.css';

const BookCard = ({ book, onDetails }) => {
  const handleDetailsClick = () => {
    if (onDetails) {
      onDetails(book);
    }
  };

  const thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail;
  const truncatedTitle = book.volumeInfo.title.length > 70 ? `${book.volumeInfo.title.substring(0, 50)}...` : book.volumeInfo.title;

  return (
    <div className='books-container'>
    <div className='book-card'>
      <div className="book-image">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={book.volumeInfo.title} />
        ) : (
          <div className="no-thumbnail">No Image Available</div>
        )}
      </div>
      <div className="book-details">
        <h3>{truncatedTitle}</h3>
        <button onClick={handleDetailsClick}>Details</button>
      </div>
    </div>
    </div>
  );
};

export default BookCard;
