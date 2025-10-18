import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        list:[]
    },
    reducers:{
        addFavorite:(state, action)=>{
            if(!state.list.find((item)=>item.id===action.payload.id)){
                state.list.push(action.payload);
            }
        },
        removeFavourite: (state, action)=>{
            state.list = state.list.filter((item)=>item.id !== action.payload);
        },
    },
})
export const {addFavorite, removeFavourite} = favoritesSlice.actions;
export default favoritesSlice.reducer