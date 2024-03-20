import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../pages/home/home";
import { Category } from "../pages/category/category";

export default [
  {
    component: <Home />,
    id: nanoid(),
  },
  {
    component: <Category />,
    path: "category/:id",
    id: nanoid(),
  },
];
