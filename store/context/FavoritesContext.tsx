import { ReactNode, createContext, useState } from "react";

interface IContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface Props {
  children: ReactNode;
}

export const FavoritesContext = createContext<IContext>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

const FavoritesProvider = ({ children }: Props) => {
  const [favoritesMealsIds, setFavoritesMealsIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoritesMealsIds([...favoritesMealsIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoritesMealsIds((currentFavorites) =>
      currentFavorites.filter((mealId) => mealId !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ ids: favoritesMealsIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
