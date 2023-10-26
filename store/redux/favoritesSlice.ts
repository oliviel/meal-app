import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFavorites {
  ids: string[];
}

const initialState: IFavorites = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ mealId: string }>) => {
      state.ids.push(action.payload.mealId);
    },
    removeFavorite: (state, action: PayloadAction<{ mealId: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.mealId), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
