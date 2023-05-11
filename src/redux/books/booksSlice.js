import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      bookstore: [...state.bookstore, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      bookstore: state.bookstore.filter((book) => book.item_id !== action.payload),
    }),
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;