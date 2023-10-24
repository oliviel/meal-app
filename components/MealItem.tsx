import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { IMeal } from "../models/meal";
import MealStats from "./MealStats";

interface Props {
  onPress: (mealId: string) => void;
  meal: IMeal;
}

const MealItem = ({ meal, onPress }: Props) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => onPress(meal.id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealStats
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MealItem;
