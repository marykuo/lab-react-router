import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";

// This is the non global layout version of the router with lazy loading.
// const router = createHashRouter([
//   {
//     path: "/",
//     lazy: async () => {
//       const { default: Home } = await import("./pages/Home");
//       return { Component: Home };
//     },
//   },
//   {
//     path: "/about",
//     lazy: async () => {
//       const { default: About } = await import("./pages/About");
//       return { Component: About };
//     },
//   },
//   {
//     path: "*",
//     lazy: async () => {
//       const { default: Home } = await import("./pages/Home");
//       return { Component: Home };
//     },
//   },
// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />, // Global layout
    children: [
      {
        index: true, // Corresponds to path: "/"
        lazy: async () => {
          const { default: Home } = await import("./pages/Home");
          return { Component: Home };
        },
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
        lazy: async () => {
          const { default: Home } = await import("./pages/Home");
          return { Component: Home };
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
