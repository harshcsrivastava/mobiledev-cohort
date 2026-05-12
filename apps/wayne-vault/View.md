```js
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

                ```