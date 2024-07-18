import { useState, useEffect } from 'react';

const useCache = () => {
  const [cache, setCache] = useState({});

  const getCachedData = (key) => cache[key];

  const setCachedData = (key, data) => {
    setCache((prevCache) => ({ ...prevCache, [key]: data }));
  };

  return { getCachedData, setCachedData };
};

export default useCache;
