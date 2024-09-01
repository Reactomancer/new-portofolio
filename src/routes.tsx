import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/layouts/main-layout";
import { HomePage } from "./pages/home-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        children: [
          { element: <HomePage />, index: true },
          { element: <p>about</p>, path: "about" },
        ],
      },
    ],
  },
]);
