import React from "react";
import { Link } from "react-router-dom";

const MainPage =() => {
  return (
      <div>
        <h1>Ascend</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/committees">Committees</Link> |{" "}
          <Link to="/membership">Membership</Link>
        </nav>
      </div>
  );
}

export default MainPage;
