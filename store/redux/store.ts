import { configureStore } from "@reduxjs/toolkit";
import favoritesMeals from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    favoritesMeals,
  },
});

export type RootState = ReturnType<typeof store.getState>;
