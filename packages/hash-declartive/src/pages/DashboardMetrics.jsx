import { useParams } from "react-router";

export function DashboardMetrics() {
  let { metricsId, subId } = useParams();

  return (
    <>
      <h2>Metrics</h2>
      <p>Dynamic Segment: </p>
      <p>metricsId: {metricsId}</p>
      <p>subId: {subId}</p>
    </>
  );
}

export default DashboardMetrics;
