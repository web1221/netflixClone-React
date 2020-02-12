import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";


function NavBar(){
  let navBarStyle = {
    display: "flex",
    justifyContent: "space-between"
  }

  return (
    <div style={navBarStyle}>
      <LeftNav/>
      <RightNav />
    </div>
  );
}

export default NavBar;
