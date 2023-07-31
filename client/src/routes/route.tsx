import { createBrowserRouter } from "react-router-dom";
import Login from "../components/screens/Login";
import Register from "../components/screens/Register";
import { default as RootLayout } from "../layout/AuthLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
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
