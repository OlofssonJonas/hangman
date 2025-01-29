import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	FlatList,
	Button,
	Appearance,
} from "react-native";

import React, { useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";
import Letters from "@/constants/Letters";
import Animals from "@/constants/Words";
import RightWord from "@/components/RightWord";
import HangManDraw from "@/components/HangManDraw";

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

interface Theme {
	background: string;
	text: string;
}

const index = () => {
	const [word, setWord] = useState<string>("");
	const [corrects, setCorrects] = useState<string[]>([]);
	const [fails, setFails] = useState<string[]>([]);
	const [status, setStatus] = useState<string>("");

	const totFailGuesses = 6;

	const randomizeWord = () =>
		setWord(Animals[Math.floor(Math.random() * Animals.length)].toUpperCase());

	const reset = () => {
		randomizeWord();
		setCorrects([]);
		setFails([]);
	};

	const onGuess = (letter: string) => {
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
			setStatus("winner");
		}
	}, [corrects]);

	useEffect(() => {
		if (fails.length === totFailGuesses) {
			setStatus("loooser!");
		}
	}, [fails]);

	useEffect(reset, []);

	const maskWord = word
		.split("")
		.map((letter) => (corrects.includes(letter) ? letter : "_"))
		.join("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>hangman</Text>
			<View style={styles.lettersArea}>
				{Letters.map((letter, idx) => (
					<Button
						key={idx}
						title={letter}
						disabled={corrects.includes(letter) || fails.includes(letter)}
						onPress={() => onGuess(letter)}
					/>
				))}
			</View>
			<View style={styles.resetButton}>
				<Button title="Reset game" onPress={() => reset()} />
			</View>
			<HangManDraw wrongGuesses={fails.length} />
			<View>
				<Text style={styles.statusText}>{status}</Text>
			</View>

			<RightWord maskWord={maskWord} />
		</SafeAreaView>
	);
};

export default index;

const styles = createStyles(theme);

function createStyles(theme: Theme) {
	return StyleSheet.create({
		container: {
			width: "100%",
			height: "100%",
		},
		lettersArea: {
			flexDirection: "row",
			flexWrap: "wrap",
			height: "auto",
			width: "100%",
			backgroundColor: theme.background,
		},
		title: {
			color: theme.background,
			textAlign: "center",
			fontSize: 30,
			textTransform: "uppercase",
			fontWeight: "bold",
			letterSpacing: 10,
		},
		resetButton: {
			backgroundColor: theme.background,
			color: theme.text,
			marginTop: 10,
			height: 40,
			width: "100%",
		},
		statusText: {
			color: "pink",
			height: 200,
			textAlign: "center",
			marginTop: 20,
			transform: "uppercase",
		},
	});
}
