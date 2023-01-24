import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import HomeButton from "../boutons/HomeButton";
import HomeModelCard from "../home/HomeModelCard";
import TitleBloc from "../stdElements/TitleBloc";
import SeasonsButton from "./SeasonsButton";
import SeasonSelected from "./seasonSelected";

const SeasonsContainer = () => {
  const [seasonSelect, setSeasonSelect] = useState();
  const [modelOfSeason, setModelOfSeason] = useState();

  useEffect(() => {
    if (seasonSelect) {
      (async () => {
        const reponse = await fetch(`${process.env.REACT_APP_API_CARS}/season/${seasonSelect}`, {
          method: "GET",
        });
        const reponseJSON = await reponse.json();
        console.log("REPONSE SEASON SELECT: ", reponseJSON.reponse);
        setModelOfSeason(reponseJSON.reponse);
      })();
    }
  }, [seasonSelect]);

  return (
    <>
      <div className="navbar">
        <HomeButton />
      </div>

      <div className="fullContainer flexCol">
        {seasonSelect ? (
          <>
            <TitleBloc title={`Les Voitures de la saison ${seasonSelect}:`} />
            {/* <SeasonSelected seasonSelect={seasonSelect} /> */}
            <div className="modelcard">
            {modelOfSeason.map((data) => <HomeModelCard data={data} />)}
            </div>
          </>
        ) : (
          <>
            <TitleBloc title={"Sélectionnez une année:"} />
            <SeasonsButton setSeasonSelect={setSeasonSelect} />
          </>
        )}
      </div>
    </>
  );
};

export default SeasonsContainer;
