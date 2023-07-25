import { createBrowserRouter } from "react-router-dom";
import Login from "../components/screens/Login";
import Register from "../components/screens/Register";
import NotFoundPage from "../components/shared/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import HomeLayout from "../layout/HomeLayout";
import RootLayout from "../layout/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      //  {
      //    path: "dashboard",
      //    element: <DashboardLayout />,
      //  },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "admin",
    element: <RootLayout />,
  },
]);

export default router;

// children: [
//       {
//         index: true,
//         element: <LandingPage />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "dashboard",
//         element: <DashboardLayout />,
//       },
//     ],
