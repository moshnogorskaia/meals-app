import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealIds.includes(meal.id),
	);

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>
					No favorite meals found. Start adding some!
				</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#662e1d",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
