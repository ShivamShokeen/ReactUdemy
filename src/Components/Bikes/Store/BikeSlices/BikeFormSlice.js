import { createAction, createSlice } from "@reduxjs/toolkit";

export const bikeFormReset = createAction("app/reset");

const BikeForm = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: "",
  },
  reducers: {
    setFormName(state, action) {
          state.name = action?.payload;
          console.log("state.name", state.name);
    },
    setFormCost(state, action) {
      state.cost = action?.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(bikeFormReset, (state, form) => {
      return [];
    });
  },
});

export const BikeFormReducer = BikeForm.reducer;

export const { setFormName, setFormCost } = BikeForm.actions;
