import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { register } = userSlice.actions;
export default userSlice.reducer;