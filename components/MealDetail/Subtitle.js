import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
}

export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#ea8e72",
	},
	subtitleContainer: {
		borderBottomColor: "#ea8e72",
		borderBottomWidth: 2,
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
	},
});
