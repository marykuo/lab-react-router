import { Link } from "react-router";

export function Navbar() {
  return (
    <nav>
      <Link to="">首頁</Link>
      {" | "}
      <Link to="about">關於我們</Link>

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
