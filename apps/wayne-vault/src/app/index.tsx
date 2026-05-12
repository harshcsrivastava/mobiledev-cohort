import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    Inter_900Black_Italic,
} from "@expo-google-fonts/inter";
import React, { useState } from "react";
import {
    StyleSheet,
    Switch,
    Text,
    View,
    useColorScheme,
    FlatList,
    ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
    biege: {
        background: "#f6ecc9",
        card: "#eb7a52",
        text: "#000",
        subtext: "#281c1c",
        accent: "#f3cf49",
    },
    light: {
        background: "#FFFFFF",
        card: "#F5F5F5",
        text: "#1A1A1A",
        subtext: "#666666",
        accent: "#6C63FF",
    },
    dark: {
        background: "#111",
        card: "#1E1E1E",
        text: "#FFFFFF",
        subtext: "#AAAAAA",
        accent: "#9D97FF",
    },
};

export interface notes {
    id: number,
    title: string,
    items: string[],
    backgroundColor: string
}
const notesData = [
    {
        id: "1",
        title: "Plan for The Day",
        items: ["Buy food", "GYM", "Invest"],
        backgroundColor: "#eb7a52",
    },
    {
        id: "2",
        title: "Really Private Notes",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus, voluptas mollitia libero ipsa amet sapiente aperiam voluptatem blanditiis.",
        backgroundColor: "#f3cf49",
    },
    {
        id: "3",
        title: "Work Tasks",
        items: ["Finish React project", "Review PRs", "Team meeting at 4 PM"],
        backgroundColor: "#6C63FF",
    },
    {
        id: "4",
        title: "Personal Journal",
        content:
            "Today I learned about React Native styling. It’s amazing how flexible flexbox layouts are for mobile UI.",
        backgroundColor: "#9D97FF",
    },
    {
        id: "5",
        title: "Shopping List",
        items: ["Milk", "Eggs", "Bread", "Coffee"],
        backgroundColor: "#52b788",
    },
    {
        id: "6",
        title: "Ideas Vault",
        content:
            "Brainstorming app concepts: Batman-themed notes app, AI-powered journaling, minimalist productivity dashboard.",
        backgroundColor: "#ff6f61",
    },
    {
        id: "7",
        title: "Travel Plans",
        items: ["Book flight tickets", "Reserve hotel", "Pack essentials"],
        backgroundColor: "#ffd166",
    },
    {
        id: "8",
        title: "Study Notes",
        content:
            "React Hook Form makes handling inputs easier. Remember to explore useForm, register, and formState APIs.",
        backgroundColor: "#118ab2",
    },
];

const HomeScreen = () => {
    const systemScheme = useColorScheme(); //light \ dark
    const [manualDark, setManualDark] = useState<boolean | null>(null);
    const [fontsLoaded] = useFonts({
        InterRegular: Inter_400Regular,
        InterBold: Inter_900Black,
    });

    if (!fontsLoaded) return <AppLoading />;

    const isDark = manualDark !== null ? manualDark : systemScheme === "dark";

    const theme = isDark ? themes.dark : themes.biege;

    console.log(systemScheme);

    const renderCard = ({ item }: notes[]) => (
        <View
            style={[
                styles.notesCard,
                item.id % 2 !== 0 ? styles.leftCard : styles.rightCard,
                { backgroundColor: item.backgroundColor },
            ]}
        >
            <Text style={styles.cardTitle}>{item.title}</Text>

            {/* Checklist style notes */}
            {item.items &&
                item.items.map((task, index) => (
                    <Text key={index}>• {task}</Text>
                ))}

            {/* Paragraph style notes */}
            {item.content && (
                <Text numberOfLines={3} style={styles.cardContent}>
                    {item.content}
                </Text>
            )}
        </View>
    );
    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <StatusBar style={manualDark ? "light" : "dark"} />
            {/* Header */}
            <View style={[styles.card, { backgroundColor: theme.card }]}>
                <Text style={[styles.title, { color: theme.text }]}>
                    {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </Text>
                <Text style={[styles.subtitle, { color: theme.subtext }]}>
                    System preference: {systemScheme ?? "unknown"}
                </Text>
            </View>

            {/* Toggle Row */}
            <View style={[styles.card, { backgroundColor: theme.card }]}>
                <View style={styles.row}>
                    <Text style={[styles.label, { color: theme.text }]}>
                        Override system theme
                    </Text>
                    <Switch
                        value={manualDark ?? systemScheme === "dark"}
                        onValueChange={setManualDark}
                        trackColor={{ false: "#ddd", true: theme.accent }}
                        thumbColor="white"
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
            <View style={styles.rowContainer}>

                <FlatList
                    data={notesData}
                    numColumns={2}
                    contentContainerStyle={styles.rowContainer}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                />
            </View>
           
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, gap: 12 },
    card: { padding: 20, borderRadius: 16 },
    title: { fontSize: 20, fontFamily: "InterBold" },
    subtitle: { fontSize: 14, marginTop: 4, fontFamily: "InterRegular" },
    label: { fontSize: 16, fontFamily: "InterRegular" },

    rowContainer: {
        // flexDirection: "row", // 👈 side by side
        // justifyContent: "space-between",
        // padding: 16,
        gap: 12,
        // padding: 2,
    },
    notesCard: {
        flex: 1,
        marginHorizontal: 8,
        paddingVertical: 32,
        paddingHorizontal: 12,
    },
    leftCard: {
        backgroundColor: "#eb7a52",
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
    },
    rightCard: {
        backgroundColor: "#f3cf49",
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: "InterBold",
    },
    cardContent: {
        fontSize: 14,
        marginTop: 4,
    },
});
