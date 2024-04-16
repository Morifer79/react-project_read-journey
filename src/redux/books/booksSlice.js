import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAll,
  addExistBooks,
  addNewBook,
  removeBook,
  getOwnBook,
  saveStart,
  saveFinish,
  removeReading,
  addReadBook,
} from './booksOperations';

const pending = state => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  books: [],
  newBooks: [],
  readBook: [],

  isLoading: false,
  error: null,
  page: 1,
  perPage: 10,
  totalPages: 0,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.books = payload.results;
        state.isLoading = false;
        state.totalPages = payload.totalPages;
      })
      .addCase(removeBook.fulfilled, (state, { payload }) => {
        state.newBooks = state.newBooks.filter(
          newBooks => newBooks._id !== payload
        );
      })
      .addCase(removeReading.fulfilled, (state, { payload }) => {
        state.readBook = payload;
      })
      .addCase(getOwnBook.fulfilled, (state, { payload }) => {
        state.newBooks = payload;
      })

      .addMatcher(
        isAnyOf(addExistBooks.fulfilled, addNewBook.fulfilled),
        (state, { payload }) => {
          state.newBooks = [...state.newBooks, payload];
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addReadBook.fulfilled,
          saveStart.fulfilled,
          saveFinish.fulfilled
        ),
        (state, { payload }) => {
          state.readBook = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAll.pending,
          addExistBooks.pending,
          addNewBook.pending,
          removeBook.pending,
          getOwnBook.pending,
          saveStart.pending,
          saveFinish.pending,
          removeReading.pending,
          addReadBook.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          getAll.rejected,
          addExistBooks.rejected,
          addNewBook.rejected,
          removeBook.rejected,
          getOwnBook.rejected,
          saveStart.rejected,
          saveFinish.rejected,
          removeReading.rejected,
          addReadBook.rejected
        ),
        rejected
      );
  },
});

export const booksReducer = booksSlice.reducer;
