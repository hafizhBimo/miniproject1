import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blog/blogSlice";
import loginSlice from "../features/login/loginSlice";

export const store = configureStore({
    reducer:{
        blogData: blogSlice,
        loginData: loginSlice
    }
})