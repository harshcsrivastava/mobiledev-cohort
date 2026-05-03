import { useEffect, useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [count, setCount] = useState(0);

    function onToggleTheme() {
        setDarkMode(!darkMode);
        // console.log(darkMode);
    }

    // 1. Without Dependency Array []
    // useEffect(() => {
    //     console.log("Runs on every render");
    //     ====> heavy billions call
    // });


     // 2. With Dependency Array []
    useEffect(() => {
        console.log("Hello with Dependency Array");
        // heavy billions call
    },[]);

     // 3. With Dependency Array []
    useEffect(() => {
        console.log("Count Toggled:", count);
        // heavy billions call
    },[count]);



    return (
        <>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: darkMode ? "#111111" : "#fbf0b7",
                    color: !darkMode ? "#111111" : "#fbf0b7",
                }}
            >
                <h1>Still Alive, Still Breathing</h1>
                <button onClick={onToggleTheme}>Toggle Theme</button>
                {/* add increament and decreament button */}
                <button onClick={() => setCount(count + 1)}>+</button>
                <span>{count}</span>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    );
}

export default App;
