import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (error) {
    throw error;
  }
})
const initialState = {
  posts: [],
  status: 'loading',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.posts = [];
      });
  }
})


export const postsReducer = postsSlice.reducer;