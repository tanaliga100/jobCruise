import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
