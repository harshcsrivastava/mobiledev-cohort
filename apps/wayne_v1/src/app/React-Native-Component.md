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
