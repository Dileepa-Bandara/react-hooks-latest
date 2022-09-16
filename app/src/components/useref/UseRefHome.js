import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function UseRefHome() {
  return (
    <div>
      <h1>useRef Hook</h1>
      <ol>
        <li>
          <NavLink to="userefone">
            Update values without rendering the component
          </NavLink>
        </li>
        <li>
          <NavLink to="usereftwo">Accessing DOM Elements</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="userefthree">
            Keep track of previous state values
          </NavLink>
        </li>
      </ol>
      <Outlet></Outlet>
    </div>
  );
}

export default UseRefHome;
