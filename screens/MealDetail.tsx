import { useContext, useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealStats from "../components/MealStats";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/FavoritesContext";
import { addFavorite, removeFavorite } from "../store/redux/favoritesSlice";
import { RootStackParamList } from "../App";
import { RootState } from "../store/redux/store";
import { MEALS } from "../dummy-data";

type RouteNativeProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;

const MealDetail = ({ route, navigation }: RouteNativeProps) => {
  const dispatch = useDispatch();
  const { ids } = useSelector((state: RootState) => state.favoritesMeals);
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);
  const mealIsFavorite = ids.includes(mealId);
  const InconName = mealIsFavorite ? "star" : "star-outline";

  function handleIconPress() {
    if (!mealIsFavorite) {
      dispatch(addFavorite({ mealId }));
    } else {
      dispatch(removeFavorite({ mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton iconName={InconName} onPress={handleIconPress} />;
      },
    });
  }, [navigation, handleIconPress]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealStats
        duration={meal?.duration!}
        complexity={meal?.complexity!}
        affordability={meal?.affordability!}
        styleText={styles.statsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingridients</SubTitle>
          <List list={meal?.ingredients!} textStyle={styles.itemTextStyles} />
          <SubTitle>Steps</SubTitle>
          <List list={meal?.steps!} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  statsText: {
    color: "white",
  },
  listOuterContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  itemTextStyles: {
    textAlign: "center",
  },
});

export default MealDetail;
