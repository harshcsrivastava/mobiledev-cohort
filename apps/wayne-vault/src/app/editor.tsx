import {
    Inter_300Light,
    Inter_400Regular,
    Inter_900Black,
    useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    useColorScheme,
    useWindowDimensions,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const headerImage = require("../../assets/Home_View_1.png");

const EditorScreen = () => {
    const systemScheme = useColorScheme();
    const { width } = useWindowDimensions();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [manualDark, setManualDark] = useState<boolean | null>(null);

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
              surface: "#2e2e2e",
              border: "#3a3a3a",
              text: "#ed1404",
              subtext: "#aaa",
              input: "#151515",
              accent: "#9D97FF",
              save: "#52b788",
              back: "#4a4a4a",
          }
        : {
              background: "#f6ecc9",
              surface: "#eb7a52",
              border: "#f0d8b0",
              text: "#000",
              subtext: "#281c1c",
              input: "#555436",
              accent: "#f3cf49",
              save: "#52b788",
              back: "#411",
          };

    const contentWidth = width >= 768 ? 640 : "100%";

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <StatusBar style={isDark ? "light" : "dark"} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
                style={styles.flex}
            >
                <ScrollView
                    style={styles.flex}
                    contentContainerStyle={[
                        styles.screen,
                        styles.scrollContent,
                        { maxWidth: contentWidth },
                    ]}
                    keyboardShouldPersistTaps="handled"
                >
                    <ImageBackground
                        source={headerImage}
                        resizeMode="cover"
                        style={styles.header}
                        imageStyle={styles.headerImage}
                    >
                        <View
                            style={[
                                styles.headerOverlay,
                                {
                                    backgroundColor: isDark
                                        ? "rgba(0,0,0,0.55)"
                                        : "rgba(255,255,255,0.55)",
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.headerTitle,
                                    { color: theme.text },
                                ]}
                            >
                                Create Note
                            </Text>
                            <Text
                                style={[
                                    styles.headerSubtitle,
                                    { color: theme.subtext },
                                ]}
                            >
                                Write, save, and revisit your ideas.
                            </Text>
                        </View>
                    </ImageBackground>

                    <View
                        style={[
                            styles.themeCard,
                            { backgroundColor: theme.surface },
                        ]}
                    >
                        <View style={styles.row}>
                            <Text style={[styles.label, { color: theme.text }]}>
                                Override system theme
                            </Text>
                            <Switch
                                value={manualDark ?? systemScheme === "dark"}
                                onValueChange={setManualDark}
                                trackColor={{
                                    false: "#ddd",
                                    true: theme.accent,
                                }}
                                thumbColor="white"
                            />
                        </View>
                        <Text
                            style={[
                                styles.subtitle,
                                { color: theme.subtext, marginTop: 8 },
                            ]}
                        >
                            Theme: {isDark ? "Batman" : "Bruce Wayne"}
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.formCard,
                            {
                                backgroundColor: theme.surface,
                                borderColor: theme.border,
                            },
                        ]}
                    >
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Note title"
                            placeholderTextColor={theme.subtext}
                            style={[
                                styles.titleInput,
                                {
                                    color: theme.text,
                                    borderColor: theme.border,
                                    backgroundColor: theme.input,
                                },
                            ]}
                        />

                        <TextInput
                            value={body}
                            onChangeText={setBody}
                            placeholder="Write your note here..."
                            placeholderTextColor={theme.subtext}
                            multiline
                            textAlignVertical="top"
                            scrollEnabled
                            style={[
                                styles.bodyInput,
                                {
                                    color: theme.text,
                                    borderColor: theme.border,
                                    backgroundColor: theme.input,
                                },
                            ]}
                        />

                        <View style={styles.actions}>
                            <Pressable
                                onPress={() => setTitle("")}
                                style={({ pressed }) => [
                                    styles.actionButton,
                                    styles.backButton,
                                    {
                                        backgroundColor: pressed
                                            ? theme.back
                                            : theme.border,
                                    },
                                ]}
                            >
                                <Text style={styles.actionText}>Back</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => {
                                    return;
                                }}
                                style={({ pressed }) => [
                                    styles.actionButton,
                                    styles.saveButton,
                                    {
                                        backgroundColor: pressed
                                            ? theme.save
                                            : theme.accent,
                                    },
                                ]}
                            >
                                <Text style={styles.actionText}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default EditorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    screen: {
        alignSelf: "center",
        width: "100%",
        padding: 16,
        gap: 16,
    },
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        minHeight: 190,
        borderRadius: 24,
        overflow: "hidden",
        justifyContent: "flex-end",
    },
    headerImage: {
        borderRadius: 24,
    },
    headerOverlay: {
        padding: 20,
        minHeight: 190,
        justifyContent: "flex-end",
    },
    headerTitle: {
        fontSize: 28,
        fontFamily: "InterBold",
        marginBottom: 6,
    },
    headerSubtitle: {
        fontSize: 14,
        fontFamily: "InterRegular",
    },
    formCard: {
        borderWidth: 1,
        borderRadius: 24,
        padding: 16,
        gap: 14,
    },
    themeCard: {
        borderRadius: 24,
        padding: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "InterRegular",
    },
    label: {
        fontSize: 16,
        fontFamily: "InterRegular",
    },
    titleInput: {
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 16,
        fontFamily: "InterRegular",
    },
    bodyInput: {
        borderWidth: 1,
        borderRadius: 16,
        minHeight: 240,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 16,
        fontFamily: "InterRegular",
        lineHeight: 22,
    },
    actions: {
        flexDirection: "row",
        gap: 12,
    },
    actionButton: {
        flex: 1,
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    backButton: {},
    saveButton: {},
    actionText: {
        color: "#ffffff",
        fontFamily: "InterBold",
        fontSize: 15,
    },
});
