import { createHashRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />, // Global layout, shared across all pages
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        lazy: async () => {
          const { default: About } = await import("./pages/About");
          return { Component: About };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
