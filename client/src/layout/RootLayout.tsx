import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

const RootLayout: React.FC = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   const handleSidebarToggle = () => {
  //     setIsSidebarOpen((prevState) => !prevState);
  //   };

  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia("(width: 500px)");

  //     const handleMediaQueryChange = (event: MediaQueryListEvent) => {
  //       setIsSidebarOpen(event.matches); // Set the state based on the media query result
  //     };

  //     // Add event listener to the media query
  //     mediaQuery.addEventListener("change", handleMediaQueryChange);

  //     // Initial check and set the state based on the media query result
  //     setIsSidebarOpen(mediaQuery.matches);

  //     // Cleanup the event listener on unmount
  //     return () => {
  //       mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //     };
  //   }, []);

  return (
    <div>
      {/* Sidebar (conditionally shown) */}
      <Sidebar />
      <div>
        {/* Navbar */}
        <Navbar />
        {/* ENTIRETY OF THE PAGE */}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
