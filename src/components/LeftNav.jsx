import React from "react";

function LeftNav(){
  let netflix = {
    color: "red",
    fontSize: "28px",
    margin: "8px",
    marginLeft: "2%"
  }

  let leftNavLinks = {
    color: "white",
    fontSize: "15px",
    margin: "5px",
    marginTop: "15px",
    marginLeft: "20px"
  }

  let leftNav = {
    display: "flex",
    alignItems: "flex-start"
  }

  return (
    <div style={leftNav}>
      <p style={netflix}> Netflix </p>
      <p style={leftNavLinks}> Home </p>
      <p style={leftNavLinks}> TV Shows </p>
      <p style={leftNavLinks}> Movies </p>
      <p style={leftNavLinks}> Latest </p>
      <p style={leftNavLinks}> My List </p>
    </div>
  );
}

export default LeftNav;
