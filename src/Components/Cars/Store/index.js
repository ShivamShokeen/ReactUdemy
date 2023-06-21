import { configureStore } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "../Store/Slices/FormSlice";

import {
  carReducer,
  addCar,
  removeCar,
  deleteCar,
  changeSearchTerm,
} from "../Store/Slices/CarsSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        form:formReducer
    }
});

export {
  store,
  changeCost,
  changeName,
  addCar,
  removeCar,
  changeSearchTerm,
  deleteCar,
};
