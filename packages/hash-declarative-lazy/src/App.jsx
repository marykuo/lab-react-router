import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";

// use lazy loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <HashRouter>
      {/* Navbar component, shared across all pages */}
      <Navbar />

      {/* use Suspense to wrap and provide a loading fallback */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* catch-all route for undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
