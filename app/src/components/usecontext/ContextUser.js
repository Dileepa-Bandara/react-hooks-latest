import { useContext } from "react";
import { UserContext } from "./providers/provider";

function ContextUser() {
  const user = useContext(UserContext);
  return (
    <div>
      <h3 style={{ color: "blue" }}>Context User Component</h3>
      <h4>{`Hello ${user} again!`}</h4>
    </div>
  );
}

export default ContextUser;
