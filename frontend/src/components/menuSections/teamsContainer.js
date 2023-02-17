import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import Spinloader from "../stdElements/Spinloader";
import HomeButton from "../boutons/HomeButton";
import TitleBloc from "../stdElements/TitleBloc";
import TeamsCards from "./TeamsCards";
import HomeModelCard from "../home/HomeModelCard";

const TeamsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [teamSelect, setTeamSelect] = useState("");
  const [teamList, setTeamList] = useState();
  const [teamCars, setTeamCars] = useState();

  const allCarsCollection = useSelector((state) => state.cars.data);

  useEffect(() => {
    async function fetchTeam() {
      try {
        let checkTeamList = [];
        for (let i = 0; i < allCarsCollection.length; i++) {
          if (!checkTeamList.includes(allCarsCollection[i].team)) {
            checkTeamList.push(allCarsCollection[i].team);
          }
        }
        setTeamList(checkTeamList);
        setLoading(true);
      } catch (error) {
        console.log("ERROR FETCH TEAM: ", error);
      }
    }
    if (!teamSelect)
    {fetchTeam()};
  }, []);

  useEffect(() => {
   if (teamSelect) {
    setLoading(false);
    setTeamCars(allCarsCollection.filter((e) => e.team === teamSelect));
    console.log("TEAM CARS: ", teamCars);
    setLoading(true);
   }
  }, [teamSelect]);

  return (
    <>
      <div className="navbar">
        <HomeButton />
        {teamSelect ? (
          <div className="navButton" onClick={() => setTeamSelect()}>
            <i class="fa-solid fa-rotate-left"></i>
          </div>
        ) : (
          ""
        )}
      </div>

      {loading ? (
        <>
          <div className="fullContainer flexCol">
            {teamSelect ? (
              <>
              <TitleBloc title={teamSelect} />
              { teamCars ? (
                <div className="modelcard">
                {teamCars.map((data) => (
                  <HomeModelCard data={data} />
                ))}
              </div>
              ) : (<Spinloader />)}
              
              </>
            ) : (
              <>
              <TitleBloc title={"Sélectionnez un Constructeur:"} />

            <div className="teamsBox">
              {teamList.map((data) => (
                <TeamsCards data={data} key={data} setTeamSelect={setTeamSelect} id={data} />
                ))}
            </div>
                </>
            )}
            
          </div>
        </>
      ) : (
        <Spinloader />
      )}
    </>
  );
};

export default TeamsContainer;
