import { index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),

  // Nested Routes
  route("dashboard", "dashboard/layout.jsx", [
    // route to /dashboard
    index("dashboard/home.jsx"),

    // route to /dashboard/metrics
    route("metrics", "dashboard/Metrics.jsx"),

    // Dynamic Segment
    // route to /dashboard/metric/:metricsId/:subId
    route("dashboard/metric/:metricsId?/:subId?", "dashboard/metrics.jsx"),

    // Splats
    // route to /dashboard/setting
    route("setting/*", "dashboard/Setting.jsx"),
  ]),

  // Route Prefixes
  ...prefix("marketing", [
    // Layout Routes
    layout("marketing/layout.jsx", [
      // route to /marketing with layout
      index("marketing/home.jsx"),

      // route to /marketing/contact
      route("contact", "marketing/contact.jsx"),
    ]),
  ]),
];
