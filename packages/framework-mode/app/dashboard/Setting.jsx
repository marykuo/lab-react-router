import { useParams } from "react-router";

export function Setting() {
  let { "*": splat } = useParams();
  return (
    <>
      <h2>Setting</h2>
      <p> splat: {splat} </p>
    </>
  );
}

export default Setting;
