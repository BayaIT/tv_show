import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Загрузка фильмов
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    return await res.json();
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.loading = true;
            })
             .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default postsSlice.reducer;