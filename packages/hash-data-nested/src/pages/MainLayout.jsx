import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* 子路由元件將會渲染在這裡 */}
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
