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

      <p>
        {"Nested Routes: "}
        <Link to="dashboard">dashboard home</Link>
        {" | "}
        <Link to="dashboard/metrics">dashboard metrics</Link>
        {" | "}
        <Link to="dashboard/setting">dashboard setting</Link>
      </p>

      <p>
        {"Layout Routes: "}
        <Link to="metrics">metrics</Link>
        {" | "}
        <Link to="setting">setting</Link>
      </p>

      <p>
        {"Route Prefix: "}
        <Link to="prefix/metrics">prefix metrics</Link>
        {" | "}
        <Link to="prefix/setting">prefix setting</Link>
      </p>

      <p>
        {"Dynamic Segment: "}
        <br />
        <Link to="my-metrics">show my metrics without metricsId and subId</Link>
        <br />
        <Link to="my-metrics/123">show metrics '123'</Link>
        <br />
        <Link to="my-metrics/123/subId/abc">
          show metrics '123' with subId 'abc'
        </Link>
        <br />
        <Link to="my-metrics//subId/abc">
          show subId 'abc' without metricsId
        </Link>
      </p>

      <p>
        {"Splat: "}
        <br />
        <Link to="my-setting/123-abc">
          show my setting with splat '123-abc'
        </Link>
        <br />
        <Link to="my-setting/123/abc/xyz">
          show my setting with splat '123/abc/xyz'
        </Link>
      </p>
    </nav>
  );
}

export default Navbar;
