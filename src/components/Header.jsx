import React from "react";
import MrRobot from "./mrRobot.jpg";



function Header(){

  var robot = {
    width: "100%"
  }

  return (
    <div>
      <img src={MrRobot} style={robot}/>
    </div>
  );
}

export default Header;
