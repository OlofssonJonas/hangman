import { Appearance, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

interface Theme {
	background: string;
	text: string;
}

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

const styles = createStyles(theme)

function createStyles (theme: Theme) {
	return StyleSheet.create({

		container: {
			height: 100,
			width: "100%",
			backgroundColor: theme.background,
			marginTop: 10,
		},
		text: {
			color: theme.text,
			textAlign: "center",
			letterSpacing: 10,
			marginVertical: "auto",
			fontSize: 30,
		},
	})
}
		