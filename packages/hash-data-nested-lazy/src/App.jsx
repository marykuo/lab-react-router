import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />, // Global layout
    children: [
      {
        index: true, // Corresponds to path: "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
