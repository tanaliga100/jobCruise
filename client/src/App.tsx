import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import NotFoundPage from "./components/shared/NotFound";
import DashboardLayout from "./layout/DashboardLayout";
import RootLayout from "./layout/RootLayout";
import AddJobPage from "./pages/AddJobPage";
import AllJobs from "./pages/AllJobs";
import DashboardPage from "./pages/DashboardPage";
import EditJob from "./pages/EditJob";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/ProfilePage";

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
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },

            {
              path: "alljobs",
              element: <AllJobs />,
            },
            {
              path: "addJob",
              element: <AddJobPage />,
            },
            {
              path: "editjob",
              element: <EditJob />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
