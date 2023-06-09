import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

export const resetForm = createAction("app/reset");

const formSlice = createSlice({
  name: "form",
  initialState: 
    {
      name: '',
      cost : 0
    }
  ,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetForm, (state, action) => {
      return [];
    });
  },
});

export const formReducer = formSlice.reducer

export const { changeCost, changeName } = formSlice.actions;
