import { createHashRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MainLayout from "./pages/MainLayout";

const router = createHashRouter([
  {
    path: "/",
    Component: MainLayout, // Global layout, shared across all pages
    children: [
      {
        index: true,
        // pass the class or function directly for internal instantiation
        Component: Home,
      },
      {
        path: "about",
        // setup a lazy route via async function to reduce initial bundle size
        lazy: async () => {
          const { default: About } = await import("./pages/About");
          return { Component: About };
        },
      },
      {
        path: "contact",
        // setup a lazy route in one line using promise chaining
        lazy: async () =>
          import("./pages/Contact").then((m) => ({ Component: m.default })),
      },
      {
        path: "*",
        // rendering JSX elements directly makes it easier to pass props
        element: <Error message="Page not found" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
