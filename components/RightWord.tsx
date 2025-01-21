import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface maskWord {
  maskWord: string,
}

const RightWord = ({maskWord}: maskWord) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{maskWord}</Text>
		</View>
	);
};

export default RightWord;

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: "100%",
		backgroundColor: "yellow",
		marginTop: 10,
	},
	text: {
		textAlign: "center",
		letterSpacing: 10,
		marginVertical: "auto",
		fontSize: 30,
	},
});
