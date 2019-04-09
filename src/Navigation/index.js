import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/character/">Characters</Link>
        </li>
        <li>
          <Link to="/location/">Locations</Link>
        </li>
        <li>
          <Link to="/episode/">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
