import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Inter_400Regular,
    Inter_900Black,
    Inter_300Light,
} from "@expo-google-fonts/inter";
import React, { useState } from "react";
import {
    StyleSheet,
    Switch,
    Text,
    View,
    useColorScheme,
    FlatList,
    TextInput,
    ListRenderItem,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface Note {
    id: string;
    title: string;
    items?: string[];
    content?: string;
    backgroundColor: string;
    createdAt: Date;
}
function getRandomDate(start: Date, end: Date): Date {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
}
const notesData: Note[] = [
    {
        id: "1",
        title: "Plan for The Day",
        items: ["Buy food", "GYM", "Invest"],
        backgroundColor: "#eb7a52",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "2",
        title: "Really Private Notes",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus, voluptas mollitia libero ipsa amet sapiente aperiam voluptatem blanditiis.",
        backgroundColor: "#f3cf49",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "3",
        title: "Work Tasks",
        items: ["Finish React project", "Review PRs", "Team meeting at 4 PM"],
        backgroundColor: "#6C63FF",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "4",
        title: "Personal Journal",
        content:
            "Today I learned about React Native styling. It’s amazing how flexible flexbox layouts are for mobile UI.",
        backgroundColor: "#9D97FF",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "5",
        title: "Shopping List",
        items: ["Milk", "Eggs", "Bread", "Coffee"],
        backgroundColor: "#52b788",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "6",
        title: "Ideas Vault",
        content:
            "Brainstorming app concepts: Batman-themed notes app, AI-powered journaling, minimalist productivity dashboard.",
        backgroundColor: "#ff6f61",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "7",
        title: "Travel Plans",
        items: ["Book flight tickets", "Reserve hotel", "Pack essentials"],
        backgroundColor: "#ffd166",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
    {
        id: "8",
        title: "Study Notes",
        content:
            "React Hook Form makes handling inputs easier. Remember to explore useForm, register, and formState APIs.",
        backgroundColor: "#118ab2",
        createdAt: getRandomDate(new Date(2025, 0, 1), new Date()),
    },
];

const HomeScreen = () => {
    const systemScheme = useColorScheme();
    const [manualDark, setManualDark] = useState<boolean | null>(null);
    const [search, setSearch] = useState<string>("");

    const [fontsLoaded] = useFonts({
        InterRegular: Inter_400Regular,
        InterBold: Inter_900Black,
        InterLight: Inter_300Light,
    });
    if (!fontsLoaded) return <AppLoading />;

    const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
    const theme = isDark
        ? {
              background: "#111",
              card: "#2e2e2e",
              text: "#ed1404",
              subtext: "#aaa",
              accent: "#9D97FF",
          }
        : {
              background: "#f6ecc9",
              card: "#eb7a52",
              text: "#000",
              subtext: "#281c1c",
              accent: "#f3cf49",
          };

    const images = {
        batman: require("@/assets/batman.png"),
        light: require("@/assets/batman_red_logo.png"),
    };

    <Image source={systemScheme === "dark" ? images.batman : images.light} />;

    const renderCard: ListRenderItem<Note> = ({ item, index }) => (
        <View
            style={[
                styles.notesCard,
                index % 2 === 0 ? styles.leftCard : styles.rightCard,
                { backgroundColor: item.backgroundColor },
            ]}
        >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item.items?.map((task, i) => (
                <Text key={i}>• {task}</Text>
            ))}
            {item.content && (
                <Text numberOfLines={3} style={styles.cardContent}>
                    {item.content}
                </Text>
            )}

            <Text style={styles.timestamp}>
                {item.createdAt.toLocaleDateString()}{" "}
                {/* {item.createdAt.toLocaleTimeString()} */}
            </Text>
        </View>
    );

    // Filter notes by search
    const filteredNotes = notesData.filter(
        (note) =>
            note.title.toLowerCase().includes(search.toLowerCase()) ||
            note.items?.some((task) =>
                task.toLowerCase().includes(search.toLowerCase()),
            ) ||
            note.content?.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <StatusBar style={isDark ? "light" : "dark"} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <FlatList
                    data={filteredNotes}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                    contentContainerStyle={styles.rowContainer}
                    ListHeaderComponent={
                        <>
                            {/* Header */}
                            <View style={[styles.card]}>
                                <Text
                                    style={[
                                        styles.title,
                                        { color: theme.text },
                                    ]}
                                >
                                    <Image
                                        source={!isDark ? images.batman : images.light}
                                        style={{ width: "20", height: "10" }}
                                    />
                                    Wayne Vault
                                </Text>
                                <Text
                                    style={[
                                        styles.subtitle,
                                        { color: theme.subtext },
                                    ]}
                                >
                                    System Identity:{" "}
                                    {isDark ? "Batman" : "Bruce Wayne"}
                                </Text>
                            </View>

                            {/* Toggle Row */}
                            <View
                                style={[
                                    styles.card,
                                    { backgroundColor: theme.card },
                                ]}
                            >
                                <View style={styles.row}>
                                    <Text
                                        style={[
                                            styles.label,
                                            { color: theme.text },
                                        ]}
                                    >
                                        Override system theme
                                    </Text>
                                    <Switch
                                        value={
                                            manualDark ??
                                            systemScheme === "dark"
                                        }
                                        onValueChange={setManualDark}
                                        trackColor={{
                                            false: "#ddd",
                                            true: theme.accent,
                                        }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>

                            {/* Search Bar */}
                            <View style={{ padding: 12 }}>
                                <TextInput
                                    placeholder="Enter Secret..."
                                    placeholderTextColor={"white"}
                                    value={search}
                                    onChangeText={setSearch}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: isDark ? "#ccc" : "#411900", 
                                        borderRadius: 8,
                                        padding: 12,
                                        backgroundColor: isDark ? "#000000" : "#555436",
                                    }}
                                />
                            </View>
                        </>
                    }
                />
            </KeyboardAvoidingView>
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
        gap: 12,
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
    timestamp: {
        fontSize: 12,
        color: "#000000",
        marginTop: 8,
        fontFamily: "InterLight",
    },
});
