# React Native Components

## 1. Text, Image, Input, and Pressable

```tsx
import styles from "expo-router/build/modal/web/modalStyles";
import { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";

export default function HomeScreen() {
    const [name, setName] = useState("");

    return (
        <View>
            <Text numberOfLines={3}>Ms. Kalyani - The Cutie</Text>

            {/* Remote image from Internet - You have to define the height and width - size pata nhi kya ayeaga, to we must define it */}
            <Image
                source={{
                    uri: "https://images.filmibeat.com/img/popcorn/fan_images/artist/38633/kalyani-priyadarshan-photos-images-2023090153690700.jpg",
                }}
                width={200}
                height={300}
            />

            {/* Local Image */}
            <Image
                source={require("@/assets/images/icon.png")}
                style={{ height: 100, width: 100 }}
                blurRadius={3} // we can create very beautiful design with this
            />

            {/* TO Take inputs */}
            <TextInput
                placeholder="Tell me your name"
                placeholderTextColor={"blue"}
                value={name}
                onChangeText={setName}
                style={{
                    borderWidth: 1,
                    borderColor: "#ddd",
                    marginTop: 10,
                    fontSize: 24,
                }}
            />

            <Pressable
                hitSlop={{
                    top: 10, // button ke top 10 point ke arount
                    left: 10,
                    right: 10,
                    bottom: 10,
                }} // component bahut chota hota hai, but uske aas pas ke area se kam karwate ho, like CROSS Button
                onPress={() => alert("Button Pressed")}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? "#4a42d4" : "#6c63ff",
                })}
            >
                {({ pressed }) =>
                    pressed ? <Text>Pressing ...</Text> : <Text>Press Me</Text>
                }
            </Pressable>
        </View>
    );
}
```

## 2. FlatList Example

```tsx
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const USERS = [
    { id: "1", name: "Alice Johnson", role: "Designer" },
    { id: "2", name: "Bob Smith", role: "Developer" },
    { id: "3", name: "Carol White", role: "Manager" },
    { id: "4", name: "David Brown", role: "Developer" },
    { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
    return (
        <FlatList
            data={USERS} // kis data ki baat ho rhi
            keyExtractor={(item) => item.id} // kisko as a key consider karn hai
            horizontal // to make the list in horizontal view
            contentContainerStyle={{ padding: 16, backgroundColor: "lime" }} // andar jo element hai usko design krne me kaam ayega
            renderItem={({ item }) => <Text>{item.name} </Text>} // to display the Output | renderItem ka callback upar alag se likhna
            ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: "black" }}></View>
            )}
        />
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
// horizontal={}
```

## 3. Login Screen with KeyboardAvoidingView

```tsx
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginBottom: 24,
                    }}
                >
                    Login
                </Text>

                <TextInput
                    placeholder="Email"
                    style={{
                        borderWidth: 1,
                        borderColor: "#ddd",
                        borderRadius: 10,
                        padding: 14,
                        fontSize: 16,
                        marginBottom: 12,
                    }}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={{
                        borderWidth: 1,
                        borderColor: "#ddd",
                        borderRadius: 10,
                        padding: 14,
                        fontSize: 16,
                        marginBottom: 20,
                    }}
                />

                <Pressable
                    style={{
                        backgroundColor: "#6C63FF",
                        padding: 16,
                        borderRadius: 12,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Sign In
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}
```

## 4. Safe Area View

```tsx
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function SafeArea() {
    return (
        <SafeAreaView
            edges={["left", "top"]}
            style={{ flex: 1, backgroundColor: "cyan" }}
        >
            <View>
                <Text>Hi</Text>
            </View>
        </SafeAreaView>
    );
}

const index = () => {
    return <SafeArea />;
};

export default index;

const styles = StyleSheet.create({});
```

## 5. Insets with useSafeAreaInsets() with StausBar

```tsx
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
    const insets = useSafeAreaInsets(); // pixalated value milti hai

    console.log(insets); // { top: 0, left: 0, right: 0, bottom: 0 }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "pink",
                paddingTop: insets.top + 30,
            }}
        >
            <StatusBar barStyle={"dark-content"} />
            // barStyle: "default" | "light-content" | "dark-content" //
            backgroundColor: Android only // hidden: hide/show the bar //
            translucent: overlay content under the bar (Android)
            <StatusBar style="light" /> //style: "auto" | "inverted" | "light" |
            "dark"
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## 6. StyleSheet - Create

```tsx
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello React Native</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "beige",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontFamily: "Montserrat",
    },
});
```

## 7. StyleSheet - Compose

```tsx
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    const isActive = true;

    const buttonStyle = StyleSheet.compose(
        styles.button,
        isActive ? styles.activeButton : null,
    );
    return (
        <View style={styles.container}>
            <Text style={buttonStyle}>Hello React ssNative</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        backgroundColor: "#ccc",
    },
    activeButton: { backgroundColor: "#6C63FF" },
    buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
```

## 8. StyleSheet - Flattened

```tsx
import { StyleSheet, Text, View } from "react-native";

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
    text: { fontSize: 24, fontWeight: "bold" },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

export default function App() {
    return <Text style={flat}>Flattended Style</Text>;
}
```

## 9. Forcefull Screen Orientation Change - useWindowDimensions

```tsx
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
    const { height, width } = useWindowDimensions();

    const isTablet = width >= 768;
    const isLandscape = width > height;

    const lockLandscape = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE,
        );
    };

    const lockPortrait = async () => {
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT,
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: width * 0.06 }}>Responsive Text 📱</Text>

            <View
                style={{
                    flexDirection: isTablet ? "row" : "column",
                }}
            >
                <View
                    style={{
                        width: isTablet ? width / 2 : width - 32,
                        backgroundColor: "#6C63FF",
                        padding: 20,
                        borderRadius: 12,
                        marginBottom: isTablet ? 0 : 12,
                    }}
                >
                    <Text style={{ color: "white" }}>Card 1</Text>
                </View>
                <View
                    style={{
                        width: isTablet ? width / 2 : width - 32,
                        backgroundColor: "#FF6584",
                        padding: 20,
                        borderRadius: 12,
                    }}
                >
                    <Text style={{ color: "white" }}>Card 2</Text>
                </View>
            </View>

            <Text style={{ color: "#888", marginTop: 16 }}>
                Screen: {Math.round(width)} × {Math.round(height)}
                {isLandscape ? " (Landscape)" : " (Portrait)"}
            </Text>

            {/* Orientation Buttons */}
            <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
                <Pressable
                    onPress={lockLandscape}
                    style={{
                        flex: 1,
                        backgroundColor: "#6C63FF",
                        padding: 12,
                        borderRadius: 8,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white" }}>Force Landscape 🔄</Text>
                </Pressable>

                <Pressable
                    onPress={lockPortrait}
                    style={{
                        flex: 1,
                        backgroundColor: "#FF6584",
                        padding: 12,
                        borderRadius: 8,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white" }}>Force Portrait 📱</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## 10. Theme Switcher - useColorScheme

```tsx
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
    light: {
        background: "#FFFFFF",
        card: "#F5F5F5",
        text: "#1A1A1A",
        subtext: "#666666",
        accent: "#6C63FF",
    },
    dark: {
        background: "#121212",
        card: "#1E1E1E",
        text: "#FFFFFF",
        subtext: "#AAAAAA",
        accent: "#9D97FF",
    },
};

const HomeScreen = () => {
    const systemScheme = useColorScheme(); //light \ dark
    const [manualDark, setManualDark] = useState<boolean | null>(null);

    const isDark = manualDark !== null ? manualDark : systemScheme === "dark";

    const theme = isDark ? themes.dark : themes.light;

    console.log(systemScheme);
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

            {/* Content Card */}
            <View style={[styles.card, { backgroundColor: theme.card }]}>
                <Text style={[styles.title, { color: theme.accent }]}>
                    Themed Card 🎨
                </Text>
                <Text style={[styles.subtitle, { color: theme.subtext }]}>
                    Colors adapt to dark/light mode automatically
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, gap: 12 },
    card: { padding: 20, borderRadius: 16 },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: { fontSize: 20, fontWeight: "bold" },
    subtitle: { fontSize: 14, marginTop: 4 },
    label: { fontSize: 16 },
});
```

# Template

## n.

```tsx

```
