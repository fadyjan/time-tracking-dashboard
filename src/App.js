import exerciselogo from "./Assets/Icons/icon-exercise.svg";
import playlogo from "./Assets/Icons/icon-play.svg";
import SelfCarelogo from "./Assets/Icons/icon-self-care.svg";
import Sociallogo from "./Assets/Icons/icon-social.svg";
import Studylogo from "./Assets/Icons/icon-study.svg";
import Worklogo from "./Assets/Icons/icon-work.svg";
import UImage from "./Assets/Images/image-jeremy.png";
import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

function App() {
  const [period, setPeriod] = useState("Daily");
  const [loading, setLoading] = useState(true);

  const DashBordArray = [
    {
      UserName: "Jeremy Robson",
      UserImage: UImage,
      UserDashbord: [
        {
          Category: "Work",
          DailyHours: "8hrs",
          WeeklyHours: "40hrs",
          MonthlyHours: "160hrs",
          LastWeek: " - 36hrs",
          Icon: Worklogo,
        },
        {
          Category: "Play",
          DailyHours: "1hrs",
          WeeklyHours: "7hrs",
          MonthlyHours: "28hrs",
          LastWeek: " - 8hrs",
          Icon: playlogo,
        },
        {
          Category: "Study",
          DailyHours: "2hrs",
          WeeklyHours: "14hrs",
          MonthlyHours: "56hrs",
          LastWeek: " - 7hrs",
          Icon: Studylogo,
        },
        {
          Category: "Exercise",
          DailyHours: "2hrs",
          WeeklyHours: "10hrs",
          MonthlyHours: "40hrs",
          LastWeek: " - 5hrs",
          Icon: exerciselogo,
        },
        {
          Category: "Social",
          DailyHours: "2hrs",
          WeeklyHours: "14hrs",
          MonthlyHours: "56hrs",
          LastWeek: " - 10hrs",
          Icon: Sociallogo,
        },
        {
          Category: "SelfCare",
          DailyHours: "1hrs",
          WeeklyHours: "7hrs",
          MonthlyHours: "28hrs",
          LastWeek: " - 2hrs",
          Icon: SelfCarelogo,
        },
      ],
    },
  ];

  const PeriodHandler = (ClickedButton) => {
    setPeriod(ClickedButton);
  };
  const SamulateApi = (state)=>{
    setLoading(state)
    setInterval(()=>{
      setLoading(true)
    },2000)
  }
  return (
    <div id="App">
      <div id="MainContainer">
        <ProfileDetails
          PeriodHandler={PeriodHandler}
          SamulateApi ={SamulateApi}
          UserName={DashBordArray[0].UserName}
          UserImage={DashBordArray[0].UserImage}
        ></ProfileDetails>
        <div id="DetailsContainer">
          {!loading && <LoadingSpinner />}
          {loading && DashBordArray[0].UserDashbord.map((CurrentRecord) => {
            return(<Card period={period} CurrentRecord={CurrentRecord}></Card>) })}
        </div>
      </div>
    </div>
  );
}

export default App;
