import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/usestate">useState</Link> {" - "}
            <Link to="/useeffect">useEffect</Link> {" - "}
            <Link to="/usecontext">useContext</Link> {" - "}
            <Link to="/useref">useRef</Link> {" - "}
            <Link to="/usestate">useState</Link> {" - "}
          </li>
        </ul>
      </nav>
    </>
  );
}
