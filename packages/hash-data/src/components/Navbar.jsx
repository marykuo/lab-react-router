import { Link, NavLink } from "react-router";

export function Navbar() {
  return (
    <nav>
      <Link to="">首頁</Link>
      {" | "}
      {/* NavLink makes it easy to show active styles */}
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "active" : "")}
        style={({ isActive }) => ({ color: isActive && "red" })}
      >
        關於我們
      </NavLink>
      {" | "}
      <Link to="contact">聯絡我們</Link>

      <p>
        {"Layout Routes: "}
        <Link to="metrics">metrics</Link>
        {" | "}
        <Link to="setting">setting</Link>
      </p>

      <p>
        {"Nested Routes: "}
        <Link to="dashboard">dashboard home</Link>
        {" | "}
        <Link to="dashboard/metrics">dashboard metrics</Link>
        {" | "}
        <Link to="dashboard/setting">dashboard setting</Link>
      </p>
    </nav>
  );
}

export default Navbar;
