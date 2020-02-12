import React from "react";
import Image from './netflixBell.jpg'

function RightNav(){
  let netflix = {
    color: "red",
    fontSize: "28px",
    margin: "8px",
    marginLeft: "2%"
  }

  let rightNavLinks = {
    color: "white",
    fontSize: "15px",
    margin: "5px",
    marginTop: "15px",
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
    marginRight: "15px",
    color: "white",
    textAlign: "center"

  }
  let image = {
    height: "30px",
    width: "30px"
  }

  return (
    <div style={rightNav}>
      <p style={rightNavLinks}> Home </p>
      <img src={Image} alt="bell" style={image}/>
      <p style={icon}>^ .  ^</p>

    </div>
  );
}

export default RightNav;
