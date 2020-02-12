import React from "react";
import Image from './netflixBell.jpg'

function RightNav(){

  let dvd = {
    color: "white",
    fontSize: "15px",
    margin: "5px",
    marginTop: "20px",
    marginLeft: "20px"
  }

  let rightNav = {
    display: "flex",
    alignItems: "flex-start"
  }

  let icon = {
    border: "1px solid red",
    height: "30px",
    width: "30px",
    backgroundColor: "red",
    marginRight: "20px",
    color: "white",
    textAlign: "center"

  }

  let emoji = {
    margin:"17px 10px 0px 5px",
    fontSize: "20px"
  }

  return (
    <div style={rightNav}>
      <p style={dvd}> DVD </p>
      <p style={emoji}>🔎</p>
      <p style={emoji}>🎁</p>
      <p style={emoji}>🔔</p>
      <p style={icon}>^ .  ^</p>

    </div>
  );
}

export default RightNav;
