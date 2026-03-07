import { createHashRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// 1. Create the router instance
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*", // Catch-all route
    element: <Home />,
  },
]);

function App() {
  // 2. Provide the router to the app
  return <RouterProvider router={router} />;
}

export default App;
