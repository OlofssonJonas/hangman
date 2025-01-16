import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	FlatList,
	Pressable,
	Button,
} from "react-native";

import React, { useEffect, useState } from "react";

import Letters from "@/constants/Letters";
import Animals from "@/constants/Words";

const index = () => {
	const [word, setWord] = useState("");
	const [corrects, setCorrects] = useState([]);
	const [fails, setFails] = useState([]);

	const randomizeWord = () =>
		setWord(Animals[Math.floor(Math.random() * Animals.length)].toUpperCase());

	const reset = () => {
		randomizeWord();
	};

	const onGuess = (letter) => {
		if (word.includes(letter)) {
			setCorrects([...corrects, letter]);
		} else {
			setFails([...fails, letter]);
		}
	};

	useEffect(() => {
		if (
			corrects.length &&
			word.split("").every((letter) => corrects.includes(letter))
		) {
			console.log("winner");
		}
	}, [corrects]);

	useEffect(() => {
		if (fails.length === 10) {
			console.log("loooser!");
		}
	}, [fails]);

	useEffect(reset, []);

	const maskWord = word
		.split("")
		.map((letter) => (corrects.includes(letter) ? letter : "_"))
		.join("");

	console.log(maskWord);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>hangman</Text>
			<View style={styles.lettersArea}>
				{Letters.map((letter, idx) => (
					<Button key={idx} title={letter} 
					disabled={corrects.includes(letter) || fails.includes(letter)}
					onPress={() => onGuess(letter)} />
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
	lettersArea: {
		flexDirection: "row",
		flexWrap: "wrap",
		height: "auto",
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
