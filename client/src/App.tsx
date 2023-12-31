import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/screens/Login";
import Register, { registerAction } from "./components/screens/Register";
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
          // index: true,
          element: <LandingPage />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
              action: registerAction,
            },
          ],
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
              path: "allJobs",
              element: <AllJobs />,
            },
            {
              path: "addJob",
              element: <AddJobPage />,
            },
            {
              path: "editJob",
              element: <EditJob />,
            },
            {
              path: "admin",
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
