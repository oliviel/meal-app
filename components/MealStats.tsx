import { Text, View, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Props {
  duration: number;
  complexity: string;
  affordability: string;
  styleContainer?: ViewStyle;
  styleText?: TextStyle;
}

const MealStats = ({
  duration,
  complexity,
  affordability,
  styleContainer,
  styleText,
}: Props) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.item, styleText]}>{duration}m</Text>
      <Text style={[styles.item, styleText]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.item, styleText]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 14,
    marginHorizontal: 4,
  },
});

export default MealStats;
