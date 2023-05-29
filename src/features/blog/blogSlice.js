import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async () => {
  try {
    const response = await axios.get(
      "https://minpro-blog.purwadhikabootcamp.com/api/blog?sort=ASC&page=1"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: [],
    loading: true,
    error: false 
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBlog.pending,(state, action)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fetchBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogData = action.payload;
    })
    .addCase(fetchBlog.rejected,(state, action)=>{
      state.loading = true;
      state.error = null;
    })
  },
});

export const selectData = (state) => state.blogData;
export default blogSlice.reducer;
