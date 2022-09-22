import exerciselogo from "./Assets/Icons/icon-exercise.svg";
import playlogo from "./Assets/Icons/icon-play.svg";
import SelfCarelogo from "./Assets/Icons/icon-self-care.svg";
import Sociallogo from "./Assets/Icons/icon-social.svg";
import Studylogo from "./Assets/Icons/icon-study.svg";
import Worklogo from "./Assets/Icons/icon-work.svg";
import UImage from "./Assets/Images/image-jeremy.png";

import "./App.css";
import Card from "./Components/Card/Card";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";

function App() {
  const DashBordArray = [
    {
      UserName: "Jeremy Robson",
      UserImage: UImage,
      UserDashbord: [
        {
          Category: "Work",
          Hours: "32hrs",
          LastWeek: "-36hrs",
          Icon: Worklogo,
        },
        { Category: "Play", Hours: "10hrs", LastWeek: "-8hrs", Icon: playlogo },
        {
          Category: "Study",
          Hours: "4hrs",
          LastWeek: "-7hrs",
          Icon: Studylogo,
        },
        {
          Category: "Exercise",
          Hours: "4hrs",
          LastWeek: "-5hrs",
          Icon: exerciselogo,
        },
        {
          Category: "Social",
          Hours: "5hrs",
          LastWeek: "-10hrs",
          Icon: Sociallogo,
        },
        {
          Category: "SelfCare",
          Hours: "2hrs",
          LastWeek: "-2hrs",
          Icon: SelfCarelogo,
        },
      ],
    },
  ];
  return (
    <div id="App">
      <div id="MainContainer">
        <ProfileDetails
          UserName={DashBordArray[0].UserName}
          UserImage={DashBordArray[0].UserImage}
        ></ProfileDetails>
        <div id="DetailsContainer">
          {DashBordArray[0].UserDashbord.map((CurrentRecord) => {
            return <Card CurrentRecord={CurrentRecord}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
