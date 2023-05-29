import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../Pages/LoginPage";

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (value, {rejectWithValue}) => {
    // const navigate = useNavigate();
    try {
      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        value
      );
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        return response.data.token;
      }
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
    // navigate("/");
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {},
    loading: true,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.loginData = payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const selectLogin = (state) => state.loginData;
export default loginSlice.reducer;
