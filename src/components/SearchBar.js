import React, { useState } from 'react';
import useSuggestions from '../hooks/useSuggestions'; // Assuming this hook fetches suggestions based on the query
import Suggestions from './Suggestions';
import '../styles/SearchBar.css'; // Import your CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = useSuggestions(query); // Custom hook to fetch suggestions based on query

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleSearch = () => {
    setShowSuggestions(false);
    onSearch(query);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search books..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {showSuggestions && query && (
        <div className="suggestions-container">
          <Suggestions suggestions={suggestions} onSelect={handleSelectSuggestion} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
