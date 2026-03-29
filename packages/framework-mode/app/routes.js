import { index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.jsx"),
  route("about", "routes/About.jsx"),

  // Nested Routes
  route("dashboard", "dashboard/Layout.jsx", [
    // route to /dashboard
    index("dashboard/Home.jsx"),

    // Dynamic Segment
    // route to /dashboard/metric/:metricsId/:subId
    route("dashboard/metric/:metricsId?/:subId?", "dashboard/Metrics.jsx"),

    // Splats
    // route to /dashboard/setting*
    route("setting/*", "dashboard/Setting.jsx"),
  ]),

  // Route Prefixes
  ...prefix("marketing", [
    // Layout Routes
    layout("marketing/Layout.jsx", [
      // route to /marketing with layout
      index("marketing/Home.jsx"),

      // route to /marketing/contact
      route("contact", "marketing/Contact.jsx"),
    ]),
  ]),
];
