import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (query) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=39`);
        setBooks(response.data.items || []);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, loading, error };
};

export default useBookSearch;
