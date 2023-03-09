import React from "react";
import "./Card.css";
import dots from "../../Assets/Icons/icon-ellipsis.svg"
export default function Card(props) {
  const PeriodSelection = props.period;
  console.log(PeriodSelection);
  const FuncComp = () => {
    if (PeriodSelection === "Daily") {
      return <h1>{props.CurrentRecord.DailyHours}</h1>;
    } else if (PeriodSelection === "Weekly") {
      return <h1>{props.CurrentRecord.WeeklyHours}</h1>;
    } else {
      //Monthly
      return <h1>{props.CurrentRecord.MonthlyHours}</h1>;
    }
  };

  return (
    <div
      id={props.CurrentRecord.Category + "Div"}
      className="InnerCardContainer"
    >
      <div className="BgColorContainer">
        <img className="CategoriesIcons" src={props.CurrentRecord.Icon}></img>
      </div>
      <div className="StatsDiv">
        <div className="Test">
          <div className="Title">
            <label>{props.CurrentRecord.Category}</label>
            <img alt="" src={dots}></img>
            </div>
          <div className="HoursContainer">
            <FuncComp></FuncComp>
            <label className="Comparrison">
              Last Week {props.CurrentRecord.LastWeek}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
