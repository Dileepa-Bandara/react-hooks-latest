import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/usestate/Home";
import UseeffectHome from "./components/useeffect/UseeffectHome";
import ContextProvider from "./components/usecontext/ContextProvider";
import ContextUser from "./components/usecontext/ContextUser";
import UseRefHome from "./components/useref/UseRefHome";
import UseRefOne from "./components/useref/UseRefOne";
import UseRefTwo from "./components/useref/UseRefTwo";
import UseRefThree from "./components/useref/UseRefThree";
import UseReducer from "./components/usereducer/UseReducer";
import UseCallbackMain from "./components/usecallback/UseCallbackMain";

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <ol>
        <li>
          <Link to="/usestate">useState Hook</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/usecontext">useContext Hook</Link>
        </li>
        <li>
          <Link to="/useref">useRef Hook</Link>
        </li>
        <li>
          <Link to="/usereducer">useReducer Hook</Link>
        </li>
        <li>
          <Link to="/usecallback">useCallback Hook</Link>
        </li>
      </ol>

      <Routes>
        <Route path="usestate" element={<Home></Home>}></Route>
        <Route
          path="useeffect"
          element={<UseeffectHome></UseeffectHome>}
        ></Route>
        <Route path="usecontext" element={<ContextProvider></ContextProvider>}>
          <Route
            path="contextuser"
            element={<ContextUser></ContextUser>}
          ></Route>
        </Route>
        <Route path="useref" element={<UseRefHome></UseRefHome>}>
          <Route path="userefone" element={<UseRefOne></UseRefOne>}></Route>
          <Route path="usereftwo" element={<UseRefTwo></UseRefTwo>}></Route>
          <Route
            path="userefthree"
            element={<UseRefThree></UseRefThree>}
          ></Route>
        </Route>
        <Route path="usereducer" element={<UseReducer></UseReducer>}></Route>
        <Route
          path="usecallback"
          element={<UseCallbackMain></UseCallbackMain>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
