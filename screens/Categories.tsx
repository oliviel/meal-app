import { FlatList, View, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryGridTile from "../components/CategoryGridTile";
import { RootStackParamList } from "../App";
import { CATEGORIES } from "../dummy-data";

type RouteNativeProps = NativeStackScreenProps<RootStackParamList>;

const Categories = ({ navigation }: RouteNativeProps) => {
  function handleOnpress(categoryId: string) {
    navigation.navigate("MealsOverview", { categoryId });
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryGridTile
            id={item.id}
            color={item.color}
            title={item.title}
            onPress={handleOnpress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
});

export default Categories;
