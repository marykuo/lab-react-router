import { createHashRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MainLayout from "./pages/MainLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardMetrics from "./pages/DashboardMetrics";
import DashboardSetting from "./pages/DashboardSetting";

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
      // Nested Routes
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            // route to /dashboard
            index: true,
            Component: DashboardHome,
          },
          {
            // route to /dashboard/metrics
            path: "metrics",
            Component: DashboardMetrics,
          },
          {
            // route to /dashboard/setting
            path: "setting",
            Component: DashboardSetting,
          },
        ],
      },
      // Layout Routes
      {
        Component: DashboardLayout,
        children: [
          {
            path: "metrics",
            Component: DashboardMetrics,
          },
          {
            path: "setting",
            Component: DashboardSetting,
          },
        ],
      },
      // Prefix Routes
      {
        path: "prefix",
        children: [
          {
            // route to /prefix/metrics
            path: "metrics",
            Component: DashboardMetrics,
          },
          {
            // route to /prefix/setting
            path: "setting",
            Component: DashboardSetting,
          },
        ],
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
