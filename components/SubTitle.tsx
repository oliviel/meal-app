import { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

const SubTitle = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginBottom: 6,
    marginHorizontal: 12,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SubTitle;
