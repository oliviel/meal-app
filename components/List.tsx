import { Text, View, StyleSheet, TextStyle } from "react-native";

interface Props {
  list: string[];
  textStyle?: TextStyle;
}

const List = ({ list, textStyle }: Props) => {
  return list.map((item) => (
    <View key={item} style={styles.listContainer}>
      <Text style={[styles.listItem, textStyle]}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 6,
    marginVertical: 6,
    paddingVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    backgroundColor: "#e2b497",
  },
  listItem: {
    color: "#351401",
    textAlign: "justify",
  },
});

export default List;
