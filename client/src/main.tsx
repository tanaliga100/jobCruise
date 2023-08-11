import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// USE OF DEFAULT THEMES
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const body = {
//   email: "billy@mail.com",
//   password: "secret",
// };

// const testEndpoint = async () => {
//   try {
//     const response = await axios.post(
//       `http://localhost:5000/api/v1/auth/login`,
//       body,
//       {
//         withCredentials: false,
//         headers: {
//           "Content-Type": "application/json", // Specify content type
//           // Add any other headers you might need, such as authorization
//         },
//       }
//     );
//     console.log("res", response.data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// testEndpoint();
console.log("API_ENDPOINT:", process.env.API_ENDPOINT);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
