import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import NotFoundPage from "./components/shared/NotFound";
import DashboardLayout from "./layout/DashboardLayout";
import RootLayout from "./layout/RootLayout";
import LandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
