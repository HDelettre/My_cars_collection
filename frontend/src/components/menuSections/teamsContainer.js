import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Spinloader from "../stdElements/Spinloader";
import HomeButton from "../boutons/HomeButton";
import TitleBloc from "../stdElements/TitleBloc";
import TeamsCards from "./TeamsCards";

const TeamsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [teamSelect, setTeamSelect] = useState("");
  const [teamList, setTeamList] = useState();

  useEffect(() => {
    async function fetchTeam() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_CARS}`, {
          method: "GET",
        });
        const reponseJSON = await reponse.json();
        console.log("REPONSE FETCH TEAM: ", reponseJSON);
        let checkTeamList = [];
        for (let i = 0; i < reponseJSON.length; i++) {
          if (!checkTeamList.includes(reponseJSON[i].team)) {
            checkTeamList.push(reponseJSON[i].team);
          }
        }
        setTeamList(checkTeamList);
        setLoading(true);
      } catch (error) {
        console.log("ERROR FETCH TEAM: ", error);
      }
    }
    fetchTeam();
  }, []);

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
