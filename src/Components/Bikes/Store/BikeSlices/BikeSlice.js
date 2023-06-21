import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

export const restForm = createAction("app/reset"); 

const BikeSlice = createSlice({
  name: "Bike",
  initialState: {
    searchTeam: "",
    bikeList: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTeam = action.payload;
    },

    addBike(state, action) {
      state.bikeList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    deleteBike(state, action) {
      let findIndex = state.bikeList.findIndex(
        (v) => v?.id == action.payload
      );
      if (findIndex != -1) {
        state.bikeList.splice(findIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(restForm, (state, action) => {
      return [];
    });
  },
});

export const BikeReducer = BikeSlice.reducer;

export const { setSearchTerm, addBike, deleteBike } = BikeSlice.actions;