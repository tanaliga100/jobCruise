export interface ILinks {
  id: number;
  linkTitle: string;
  path: string;
  icon?: React.ReactElement;
  size?: string;
}

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import EditRoadIcon from "@mui/icons-material/EditRoad";

export const links: ILinks[] = [
  {
    id: 1,
    size: "large",
    icon: <DashboardIcon />,
    linkTitle: "Dashboard",
    path: ".",
  },
  { id: 2, icon: <DonutSmallIcon />, linkTitle: "All Jobs", path: "alljobs" },
  {
    id: 3,
    icon: <AddToPhotosIcon />,
    linkTitle: "Add Job",
    path: "addJob",
  },
  { id: 4, icon: <EditRoadIcon />, linkTitle: "Edit Job", path: "editjob" },
  { id: 5, icon: <AccountCircleIcon />, linkTitle: "Admin", path: "admin" },
];

import React from "react";
// import { AiOutlineAppstoreAdd, AiOutlineEdit } from "react-icons/ai";
// import { BiObjectsHorizontalLeft } from "react-icons/bi";
// import { BsPersonGear } from "react-icons/bs";
// import { RxDashboard } from "react-icons/rx";
