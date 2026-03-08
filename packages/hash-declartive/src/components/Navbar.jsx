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

      <p>
        {"Route Prefix: "}
        <Link to="prefix/metrics">prefix metrics</Link>
        {" | "}
        <Link to="prefix/setting">prefix setting</Link>
      </p>

      <p>
        {"Dynamic Segment: "}
        <Link to="my-metrics/123">show metrics '123'</Link>
        {" | "}
        <Link to="my-metrics/123/abc">show metrics '123' with subId 'abc'</Link>
      </p>
    </nav>
  );
}

export default Navbar;
