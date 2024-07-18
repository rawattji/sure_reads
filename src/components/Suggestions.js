import React from 'react';

const Suggestions = ({ suggestions, onSelect }) => (
  <ul className="suggestions">
    {suggestions.map((suggestion, index) => (
      <li key={index} onClick={() => onSelect(suggestion)}>{suggestion}</li>
    ))}
  </ul>
);

export default Suggestions;
