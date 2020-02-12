import React from "react";
import Bojack from "./bojack.png";
import BladeRunner from "./BladeRunner.png";
import Office from "./office.png";
import Saul from "./saul.png";
import Witcher from "./witcher.png";




function HBar(){

  return (
    <div className="container">
    <div className="item"><img src={Bojack}/></div>
    <div className="item"><img src={BladeRunner}/></div>
    <div className="item"><img src={Office}/></div>
    <div className="item"><img src={Saul}/></div>
    <div className="item"><img src={Witcher}/></div>
    <div class="content">
      <div class="background">
        <div class="left">left</div>
        <div class="right">right</div>
      </div>
      <div class="content-container">content here...</div>
    </div>
    </div>
  );
}

export default HBar;
