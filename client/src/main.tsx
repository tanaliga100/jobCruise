import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// USE OF DEFAULT THEMES

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      {/* <AppTest /> */}
    </ChakraProvider>
  </React.StrictMode>
);
