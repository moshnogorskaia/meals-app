import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0,
	);

	function renderMealItem(itemData) {
		return <MealItem title={itemData.item.title} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
