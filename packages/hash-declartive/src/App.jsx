import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router";
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
    <HashRouter>
      {/* Navbar component, shared across all pages */}
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Layout Routes */}
        <Route element={<DashboardLayout />}>
          {/* route to /metrics */}
          <Route path="metrics" element={<DashboardMetrics />} />
          {/* route to /setting */}
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        {/* Nested Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          {/* route to /dashboard */}
          <Route index element={<DashboardHome />} />
          {/* route to /dashboard/metrics */}
          <Route path="metrics" element={<DashboardMetrics />} />
          {/* route to /dashboard/setting */}
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
        <Route path="my-metrics/:metricsId" element={<DashboardMetrics />} />
        <Route
          path="my-metrics/:metricsId/:subId"
          element={<DashboardMetrics />}
        />

        {/* catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
