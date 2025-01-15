import { StyleSheet, Text, SafeAreaView, View, FlatList, Pressable, Button } from "react-native";
import React, { useState } from "react";

import Letters from "@/constants/Letters";

const index = () => {
	const [input, setInput] = useState("");


	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>hangman</Text>
			<View style={styles.playground}>
			{Letters.map((letter, idx) => (
        <Button key={idx} title={letter} />
      ))}
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	innerGround: {
		height: 40,
		width: 40,
		backgroundColor: "yellow",
		margin: 10,
	},
	playground: {
		flexDirection: "row",
    flexWrap: 'wrap',
		height: 200,
		width: "100%",
		backgroundColor: "blue",
	},
	title: {
		color: "white",
		textAlign: "center",
		fontSize: 30,
		textTransform: "uppercase",
		fontWeight: "bold",
		letterSpacing: 10,
	},
});
