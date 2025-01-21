import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
	wrongGuesses: Number;
}

const HangManDraw: React.FC<Props> = ({ wrongGuesses }) => {
	// Array of hangman parts
	const hangmanParts = [
		<View key="head" style={styles.head}></View>,
		<View key="body" style={styles.body}></View>,
		<View key="leftLeg" style={styles.leftLeg}></View>,
		<View key="rightLeg" style={styles.rightLeg}></View>,
		<View key="leftArm" style={styles.leftArm}></View>,
		<View key="rightArm" style={styles.rightArm}></View>,
	];

	return (
		<View style={styles.container}>
			<View style={styles.hanger}>
				{/* Only render the parts up to the number of wrong guesses */}
				{hangmanParts.slice(0, wrongGuesses)}
			</View>
		</View>
	);
};

export default HangManDraw;

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		alignItems: "center",
	},
	body: {
		height: 40,
		width: 2,
		backgroundColor: "white",
		marginLeft: 60,
	},
	hanger: {
		height: 150,
		width: 100,
		borderLeftWidth: 2,
		borderLeftColor: "white",
		borderTopWidth: 2,
		borderTopColor: "white",
	},
	head: {
		width: 40,
		height: 40,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 50,
		marginLeft: 40,
	},
	leftArm: {
		height: 30,
		width: 2,
		backgroundColor: "white",
		transform: [{ rotate: "45deg" }],
		marginLeft: 50,
		marginTop: -55,
	},
	leftLeg: {
		height: 30,
		width: 2,
		backgroundColor: "white",
		transform: [{ rotate: "45deg" }],
		marginLeft: 50,
		marginTop: -10,
	},
	rightArm: {
		height: 30,
		width: 2,
		backgroundColor: "white",
		transform: [{ rotate: "-45deg" }],
		marginLeft: 70,
		marginTop: -30,
	},
	rightLeg: {
		height: 30,
		width: 2,
		backgroundColor: "white",
		position: "absolute",
		transform: [{ rotate: "-45deg" }],
		marginLeft: 70,
		marginTop: 70,
	},
});
