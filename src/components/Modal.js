import React from 'react';
// import '../styles/Modal.css';

const Modal = ({ book, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <h2>{book.volumeInfo.title}</h2>
      {book.volumeInfo.authors && <h3>Author(s): {book.volumeInfo.authors.join(', ')}</h3>}
      {book.volumeInfo.publisher && <h3>Publisher: {book.volumeInfo.publisher}</h3>}
      {book.volumeInfo.publishedDate && <h3>Published Date: {book.volumeInfo.publishedDate}</h3>}
      <p>{book.volumeInfo.description}</p>
    </div>
  </div>
);

export default Modal;
