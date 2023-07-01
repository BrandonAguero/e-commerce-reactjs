import { createSlice } from "@reduxjs/toolkit";

const timePurchasedProductSlice = createSlice({
  name: "timePurchasedProduct",
  initialState: null,
  reducers: {
    setTimePurchasedProductG: (state, action) => action.payload,
  },
});

export const { setTimePurchasedProductG } = timePurchasedProductSlice.actions;

export default timePurchasedProductSlice.reducer;
