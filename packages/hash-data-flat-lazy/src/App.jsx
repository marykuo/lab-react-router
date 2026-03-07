import { createHashRouter, RouterProvider } from "react-router-dom";

// 1. Create the router instance
const router = createHashRouter([
  {
    path: "/",
    lazy: async () => {
      const { default: Home } = await import("./pages/Home");
      return { Component: Home };
    },
  },
  {
    path: "/about",
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
]);

function App() {
  // 2. Provide the router to the app
  return <RouterProvider router={router} />;
}

export default App;
