import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch data use createAsyncThunk(fastParameter= reducerName/action, sectionParameter= async Fetch Data )
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return res.data;
});

export const postSlice = createSlice({
	name: 'posts',
	initialState: {
		isLoading: false,
		posts: [],
		error: null,
	},
	extraReducers: (builder) => {
		// action create, if fetchPosts is pending then run this code
		builder.addCase(fetchPosts.pending, (state) => {
			state.isLoading = true;
		});
		// action create, if fetchPosts is fulfilled then run this code
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		// action create, if fetchPosts is rejected then run this code
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		});
	},
});

export default postSlice.reducer;
