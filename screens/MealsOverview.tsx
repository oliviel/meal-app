import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MEALS, CATEGORIES } from "../dummy-data";
import MealsList from "../components/MealsList";

type RouteNativeProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

const MealsOverview = ({ route, navigation }: RouteNativeProps) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  function handleOnpress(mealId: string) {
    navigation.navigate("MealDetail", { mealId });
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList meals={displayedMeals} onPress={handleOnpress} />;
};

export default MealsOverview;
