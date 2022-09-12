import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await fetch('api/v1/messages');
  const message = await response.json();
  return message.data.body;
});

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    message: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export default messagesSlice.reducer;
