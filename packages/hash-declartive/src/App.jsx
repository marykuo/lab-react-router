import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <HashRouter>
      {/* Navbar component, shared across all pages */}
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
