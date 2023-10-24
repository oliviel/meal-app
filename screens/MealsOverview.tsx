import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MEALS, CATEGORIES } from "../dummy-data";
import MealItem from "../components/MealItem";

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

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={displayedMeals}
        renderItem={({ item }) => (
          <MealItem meal={item} onPress={handleOnpress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
