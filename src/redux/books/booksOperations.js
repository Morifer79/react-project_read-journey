import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const getAll = createAsyncThunk(
  'books/fetchAll',
  async (
    { page = 1, limit = 10, title = '', autor = '' },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(
        `/books/recommend?page=${page}&limit=${limit}&title=${title}&author=${autor}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addExistBooks = createAsyncThunk(
  'books/addBooks',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/books/add/${_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async ({ title, author, totalPages }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books/add', {
        title,
        author,
        totalPages,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeBook = createAsyncThunk(
  'books/deleteBook',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/books/remove/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOwnBook = createAsyncThunk(
  'books/ownBook',
  async ({ status }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/books/own', { status });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const saveStart = createAsyncThunk(
  'books/saveStart',
  async ({ id, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books/reading/start', {
        id,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const saveFinish = createAsyncThunk(
  'books/saveFinish',
  async ({ id, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books/reading/finish', {
        id,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeReading = createAsyncThunk(
  'books/deleteProgress',
  async ({ bookId, readingId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addReadBook = createAsyncThunk(
  'books/addRead',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/books/${_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
