# Stack Navigation

### Concept
- Every new screen is placed **on top of another screen**.
- If you see a **back button**, it means screens are stacked.

---

## 🔹 Basic Setup

```tsx
const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Details: DetailedScreen,
    Profile: Profiles
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
```

```tsx
<Link screen="Details">Go to details</Link> // both can be used
<Button screen="Details">Go to details</Button>
```

---

## 🍬 Mentos Zindagi (useNavigation)

```tsx
const navigation = useNavigation();

<Button onPress={() => navigation.navigate("Details")}>
  Details
</Button>
```

---

## 🔄 Moving Between Screens

- **Go from Profile to any page** → use `popTo(<screen_name>)`

```tsx
<Button 
  title="Go Home" 
  onPress={() => navigation.popTo("Home")}
>
  Home
</Button>
```

⚠️ Don’t use `navigate` here → it will **add another stack layer** unnecessarily.  
The stack won’t be cleared.

---

### Other Useful Methods
- `popToTop()` → no params, goes back to the **first screen**.  
- `replace()` → clears the stack so you **cannot go back**.

---

## 🎯 Use Cases
1. Authentication Flow  
2. E‑commerce App  
3. Social Media App  
4. Multi‑Step Forms  
5. Details Page  
