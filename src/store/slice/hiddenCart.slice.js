import { createSlice } from "@reduxjs/toolkit";

const hiddenCartSlice = createSlice({
  name: "hiddenCart",
  initialState: "translate-x-full",
  reducers: {
    setHiddenCartG: (state, action) => action.payload,
  },
});

export const { setHiddenCartG } = hiddenCartSlice.actions;

export default hiddenCartSlice.reducer;
