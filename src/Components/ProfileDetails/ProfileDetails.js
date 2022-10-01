import React from "react";
import "./ProfileDetails.css";

export default function ProfileDetails(props) {
    let CapitalUserName = props.UserName.toUpperCase()
    const FirstName = CapitalUserName.split(" ")[0]
    const LastName = CapitalUserName.split(" ")[1]
    const OnCLickFunc = (event)=>{
      props.PeriodHandler(event.target.innerHTML)
    }
  return (
    <div id="ProfileContainer">
      <div id="UserDetails">
        <div id="UserWrapper">
          <img src={props.UserImage} alt="UserProfile"></img>
          <div id="InfoWrapper">
          <h2 id="Report"> Report For</h2>
          <h2 id="UserName"> {FirstName} <br></br>{LastName}</h2>
          </div>
          
        </div>
      </div>
      <div id="PeriodDetails">
        <button onClick={OnCLickFunc}>Daily</button>
        <button onClick={OnCLickFunc}>Weekly</button>
        <button onClick={OnCLickFunc}>Monthly</button>
      </div>
    </div>
  );
}
