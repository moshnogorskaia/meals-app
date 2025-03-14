import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#903013" },
						headerTintColor: "white",
						contentStyle: { backgroundColor: "#662e1d" },
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
					<Stack.Screen name="MealDetail" component={MealDetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
