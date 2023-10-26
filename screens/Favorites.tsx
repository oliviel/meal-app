// import { useContext } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealsList from "../components/MealsList";
// import { FavoritesContext } from "../store/context/FavoritesContext";
import { RootState } from "../store/redux/store";
import { RootStackParamList } from "../App";
import { MEALS } from "../dummy-data";

type RouteNativeProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

const Favorites = ({ navigation }: RouteNativeProps) => {
  // const { ids } = useContext(FavoritesContext);
  const { ids } = useSelector((state: RootState) => state.favoritesMeals);
  const meals = MEALS.filter((meal) => ids.includes(meal.id));

  function handleOnpress(mealId: string) {
    navigation.navigate("MealDetail", { mealId });
  }

  if (ids.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You have not favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={meals} onPress={handleOnpress} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Favorites;
