import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

export const resetCarForm = createAction("app/reset");

const carSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      let findIndex = state.data.findIndex((v) => v.id == action.payload);
      if (findIndex != -1) {
        state.data.slice(findIndex, 1);
      }
    },

    deleteCar(state, action) {
      let findIndex = state.data.findIndex((v) => v.id == action.payload);
      if (findIndex != -1 && findIndex != undefined) {
        state.data.splice(findIndex, 1);
      } else {
        return;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetCarForm, (state, action) => {
      return [];
    });
  },
});

export const carReducer = carSlice.reducer;

export const { addCar, removeCar, changeSearchTerm, deleteCar } =
  carSlice.actions;
