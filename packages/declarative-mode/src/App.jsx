import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardMetrics from "./pages/DashboardMetrics";
import DashboardSetting from "./pages/DashboardSetting";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    // You can replace BrowserRouter with:
    // - HashRouter to use hash route
    // - MemoryRouter to use memory route (usually for testing or non-browser environments)
    <BrowserRouter>
      {/* Navbar component, shared across all pages */}
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Nested Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          {/* route to /dashboard */}
          <Route index element={<DashboardHome />} />
          {/* route to /dashboard/metrics */}
          <Route path="metrics" element={<DashboardMetrics />} />
          {/* route to /dashboard/setting */}
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        {/* Layout Routes */}
        <Route element={<DashboardLayout />}>
          {/* route to /metrics */}
          <Route path="metrics" element={<DashboardMetrics />} />
          {/* route to /setting */}
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        {/* Route Prefix */}
        <Route path="prefix">
          {/* route to /prefix/metrics */}
          <Route path="metrics" element={<DashboardMetrics />} />
          {/* route to /prefix/setting */}
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        {/* Dynamic Segment */}
        {/* You can have multiple dynamic segments in one route path. */}
        {/* You can have optional route segment or static segments */}
        <Route
          path="my-metrics/:metricsId?/subId?/:subId?"
          element={<DashboardMetrics />}
        />

        {/* Splat */}
        {/* A splat is a special kind of dynamic segment that matches the rest of the URL. */}
        <Route path="my-setting/*" element={<DashboardSetting />} />

        {/* catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
