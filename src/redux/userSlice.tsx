import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
