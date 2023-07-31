// import {
//   Link,
//   Outlet,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";

// const AppTest = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { index: true, element: <h1>This is the home page</h1> },

//         { path: "contact", element: <h1>Contact</h1> },
//         {
//           path: "dashboard",
//           element: <h1>Dashboard</h1>,
//           loader: ({ request }) =>
//             fetch("/api/dashboard.json", {
//               signal: request.signal,
//             }),
//         },
//         {
//           element: <AuthLayout />,
//           children: [
//             {
//               path: "login",
//               element: <h1>Login</h1>,
//               //     loader: redirectIfUser,
//             },
//             {
//               path: "logout",
//               element: <h1>Logout</h1>,
//               //     action: logoutUser,
//             },
//           ],
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router}></RouterProvider>;
// };
// export default AppTest;

// export const RootLayout = () => {
//   return (
//     <>
//       <nav>
//         <Link to="/"> Home</Link>
//         <Link to="/contact"> Contact</Link>
//         <Link to="/dashboard"> Dashboard</Link>
//         <Link to="/login"> Login</Link>
//         <Link to="/logout"> Logout</Link>
//       </nav>
//       <div className="outlet">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// const AuthLayout = () => {
//   return (
//     <>
//       {/* <Link to="/login"> Contact</Link>
//       <Link to="/dashboard"> Dashboard</Link> */}
//       <Outlet />
//     </>
//   );
// };
