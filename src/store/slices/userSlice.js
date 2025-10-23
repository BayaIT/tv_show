import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  loading: false, 
  error: null, 
  message: null, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register(state, action) {
      const newUser = {
        id: Date.now().toString(),
        email: action.payload.email,
        password: action.payload.password,
      };
      state.users.push(newUser);
      state.error = null;
      state.message = null;
    },
    registrationFailed(state, action) {
      state.error = action.payload;
      state.message = null;
    },

    registrationSuccess(state, action) {
      state.message = action.payload;
      state.error = null;
    },
    
    clearUserMessage(state) {
      state.message = null;
      state.error = null;
    }
  },
});

export const { register, registrationFailed, registrationSuccess, clearUserMessage } = userSlice.actions;
export default userSlice.reducer;
