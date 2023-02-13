import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: { data: null },
  reducers: {
    GET_ALL_CARS: (state, { payload }) => {
      state.data = payload;
    },
    ADD_CAR: (state, {payload}) => {
      state.data.unshift(payload)
    }
  }
});

export const { GET_ALL_CARS, ADD_CAR } = carsSlice.actions;

export default carsSlice.reducer;
