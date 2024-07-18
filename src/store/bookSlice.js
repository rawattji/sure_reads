import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    query: '',
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setQuery, setBooks, setLoading, setError } = bookSlice.actions;
export default bookSlice.reducer;