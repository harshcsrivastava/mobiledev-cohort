import { StyleSheet, Text, View } from "react-native";

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
    text: { fontSize: 24, fontWeight: "bold" },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

export default function App() {
    return <Text style={flat}>Flattended Style</Text>;
}
