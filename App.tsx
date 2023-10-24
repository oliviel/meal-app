import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#351401" },
            headerBackTitleVisible: false,
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "Meals Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // initialParams={{ categoryId: "" }}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetail}
            options={{
              title: "Meal Detail",
              // headerRight: () => {
              //   return <Text>in Header</Text>;
              // },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
