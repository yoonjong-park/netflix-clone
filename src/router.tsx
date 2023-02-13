import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Tv from "./Pages/Tv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
        children: [],
      },
      {
        path: "search",
        element: <Search />,
        children: [],
      },
      {
        path: "tv",
        element: <Tv />,
        children: [],
      },
    ],
  },
]);

export { router };
