import { configureStore } from "@reduxjs/toolkit";
import {
  BikeReducer,
  setSearchTerm,
  addBike,
  deleteBike,
} from "./BikeSlices/BikeSlice";
import {
  BikeFormReducer,
  setFormName,
  setFormCost,
} from "./BikeSlices/BikeFormSlice";

const BikeStore = configureStore({
  reducer: {
    bikes: BikeReducer,
    bikeForm: BikeFormReducer,
  },
});

export {
  BikeStore,
  setFormName,
  setFormCost,
  setSearchTerm,
  addBike,
  deleteBike,
};
