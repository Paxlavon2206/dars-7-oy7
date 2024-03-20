import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../pages/home/home";

export default [
    {
        component: <Home/>,
        id:nanoid()
    },
]