import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setBooks, setLoading, setError } from './store/bookSlice';
import Header from './components/Header';
import HookText from './components/HookText';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import useBookSearch from './hooks/useBookSearch';
import usePagination from './hooks/usePagination';
import Footer from './components/Footer';
import Particle from './components/Particle';
import Modal from './components/Modal';
import Preloader from './components/Pre';
import './App.css';
import './style.css';

const App = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.books.query);
  const { books, loading, error } = useBookSearch(query);
  const { paginatedData, currentPage, totalPages, nextPage, prevPage } = usePagination(books, 12);

  const [selectedBook, setSelectedBook] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (query) {
      dispatch(setBooks(books));
      dispatch(setLoading(loading));
      dispatch(setError(error));
    }
  }, [books, loading, error, query, dispatch]);

  const handleSearch = (query) => {
    dispatch(setQuery(query));
  };

  const handleDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Header />
        {/* <SearchBar onSearch={handleSearch} /> */}
        <main>
          <HookText />
          <Particle />
          <SearchBar onSearch={handleSearch} />
          {loading && <p className='loading'>Loading...</p>}
          {error && <p>{error}</p>}
          <BookList books={paginatedData} onDetails={handleDetails} />
          <div className="pagination-controls">
            {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
            {currentPage < totalPages && <button onClick={nextPage}>Next</button>}
          </div>
        </main>
        {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
        <Footer />
      </div>
    </>
  );
};

export default App;
