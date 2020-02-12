import React from "react";
import { Link } from 'react-router-dom';

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
      <Link to='/' style={leftNavLinks}> <em>Home</em></Link>
      <Link to='/test' style={leftNavLinks}> <em>Test</em></Link>
      <p style={leftNavLinks}> TVShows </p>
      <p style={leftNavLinks}> Movies </p>
      <p style={leftNavLinks}> Latest </p>
      <p style={leftNavLinks}> MyList </p>
    </div>
  );
}

export default LeftNav;
