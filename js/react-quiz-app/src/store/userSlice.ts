import { createSlice } from "@reduxjs/toolkit";

interface userState {
  userRecord: number;
}

const initialState: userState = {
  userRecord: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
