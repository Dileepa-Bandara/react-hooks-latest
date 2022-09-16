import React, { useState } from "react";
import { UserContext } from "./providers/provider.js";
import { NavLink, Outlet } from "react-router-dom";

function ContextProvider() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <div>
      <UserContext.Provider value={user}>
        <h2>useContext Hook</h2>
        <h3 style={{ color: "blue" }}>Context Provider Component</h3>
        <ol>
          <li>
            <NavLink to="contextuser">Context User Component</NavLink>
          </li>
        </ol>

        <h4>{user}</h4>
        <Outlet></Outlet>
      </UserContext.Provider>
    </div>
  );
}

export default ContextProvider;
