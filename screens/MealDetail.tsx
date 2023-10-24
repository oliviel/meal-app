import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealStats from "../components/MealStats";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { MEALS } from "../dummy-data";
import { RootStackParamList } from "../App";
import IconButton from "../components/IconButton";

type RouteNativeProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;

const MealDetail = ({ route, navigation }: RouteNativeProps) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);

  function handleIconPress() {
    console.log("taped");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton />;
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
