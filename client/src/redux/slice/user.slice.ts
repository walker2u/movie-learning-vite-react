import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  email: string;
  FavMovie: number[];
  createdAt: Date;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    }
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;
