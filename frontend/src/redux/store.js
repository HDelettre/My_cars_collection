import {configureStore} from "@reduxjs/toolkit";

// IMPORT SLICES
import carsReducers from "./carsSlice";

export default configureStore({
  reducer: {
    cars: carsReducers
  }
});