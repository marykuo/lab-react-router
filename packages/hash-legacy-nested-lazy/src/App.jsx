import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      {/* Navbar component, shared across all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* catch-all route for undefined paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
