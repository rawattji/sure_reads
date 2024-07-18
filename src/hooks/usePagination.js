import { useState, useMemo } from 'react';

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items, itemsPerPage]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { paginatedData, currentPage, totalPages, nextPage, prevPage };
};

export default usePagination;
