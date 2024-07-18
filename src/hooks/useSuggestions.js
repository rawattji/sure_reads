import { useState, useEffect } from 'react';
import axios from 'axios';

const useSuggestions = (query) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const suggestionTitles = response.data.items.map(item => item.volumeInfo.title);
        setSuggestions(suggestionTitles);
      } catch (error) {
        console.error('Failed to fetch suggestions', error);
        setSuggestions([]);
      }
    };

    fetchSuggestions();

    // Clean up function to cancel previous requests on query change
    return () => setSuggestions([]);
  }, [query]);

  return suggestions;
};

export default useSuggestions;
