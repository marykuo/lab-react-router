import { Outlet } from "react-router";

export function Layout() {
  return (
    <div>
      <h1>Marketing</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
