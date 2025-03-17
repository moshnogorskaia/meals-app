import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0,
	);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId,
		).title;

		navigation.setOptions({
			headerTitle: categoryTitle,
		});
	}, [catId, navigation]);

	return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
