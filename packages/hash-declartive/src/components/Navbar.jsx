import { Link } from "react-router";

export function Navbar() {
  return (
    <nav>
      <Link to="/">首頁</Link>
      {" | "}
      <Link to="/about">關於我們</Link>
    </nav>
  );
}

export default Navbar;
