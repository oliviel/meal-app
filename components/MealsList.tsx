import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { IMeal } from "../models/meal";

interface Props {
  meals: IMeal[];
  onPress: (mealId: string) => void;
}

const MealsList = ({ meals, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={meals}
        renderItem={({ item }) => <MealItem meal={item} onPress={onPress} />}
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

export default MealsList;
