import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const h1 = React.createElement(
//     "h1",
//     {
//         className: "title",
//         id: "he",
//     },
//     "Welcome to mobile",
// );

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
