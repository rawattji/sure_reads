import React from 'react';

const Pagination = ({ currentPage, totalPages, nextPage, prevPage }) => (
  <div className="pagination-controls">
    
    {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
    {currentPage < totalPages && <button onClick={nextPage}>Next</button>}
  </div>
);

export default Pagination;
