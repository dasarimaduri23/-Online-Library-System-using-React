import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books';

// 🔁 Load from localStorage or fallback to static books
const storedBooks = JSON.parse(localStorage.getItem('books'));
const initialState = storedBooks || booksData;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;