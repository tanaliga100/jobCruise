export interface ILinks {
  id: number;
  linkTitle: string;
  path: string;
  icon?: React.ReactElement;
}
export const links: ILinks[] = [
  {
    id: 1,
    icon: <BiObjectsHorizontalLeft />,
    linkTitle: "Dashboard",
    path: ".",
  },
  { id: 2, icon: <RxDashboard />, linkTitle: "All Jobs", path: "alljobs" },
  {
    id: 3,
    icon: <AiOutlineAppstoreAdd />,
    linkTitle: "Add Job",
    path: "addJob",
  },
  { id: 4, icon: <AiOutlineEdit />, linkTitle: "Edit Job", path: "editjob" },
  { id: 5, icon: <BsPersonGear />, linkTitle: "Admin", path: "admin" },
];

import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineEdit } from "react-icons/ai";
import { BiObjectsHorizontalLeft } from "react-icons/bi";
import { BsPersonGear } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
