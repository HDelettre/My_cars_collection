import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import HomeButton from "../boutons/HomeButton";
import HomeModelCard from "../home/HomeModelCard";
import TitleBloc from "../stdElements/TitleBloc";
import SeasonsButton from "./SeasonsButton";
import Spinloader from "../stdElements/Spinloader";

const SeasonsContainer = () => {
  const [seasonSelect, setSeasonSelect] = useState();
  const [modelOfSeason, setModelOfSeason] = useState();
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    if (seasonSelect) {
      (async () => {
        const reponse = await fetch(
          `${process.env.REACT_APP_API_CARS}/season/${seasonSelect}`,
          {
            method: "GET",
          }
        );
        const reponseJSON = await reponse.json();
        
        if (reponseJSON.reponse.length === 0) {
          setMessageError(true)
        } else {
          setModelOfSeason(reponseJSON.reponse);
          setMessageError(false)
        }
      })();
    }
  }, [seasonSelect, setSeasonSelect, setModelOfSeason]);

  return (
    <>
      <div className="navbar">
        <HomeButton />
        {seasonSelect && !messageError ? (
        <div className="navButton" onClick={() => setSeasonSelect()}>
        <i class="fa-solid fa-rotate-left"></i>
        </div>) : ("")}
      </div>

      <div className="fullContainer flexCol">
        {seasonSelect && !messageError ? (
          <>
            <TitleBloc title={`Les Voitures de la saison ${seasonSelect}:`} />
            {modelOfSeason ? (
              <div className="modelcard">
                {modelOfSeason.map((data) => (
                  <HomeModelCard data={data} />
                ))}
              </div>
            ) : (
              <Spinloader />
            )}
          </>
        ) : (
          <>
            <TitleBloc title={"Sélectionnez une année:"} />
            <SeasonsButton
              setSeasonSelect={setSeasonSelect}
            />
          </>
        )}
      </div>

          {messageError ? (
            <div>Il n'y a pas de modèle dans cette partie</div>
          ) : (
            ""
          )}
    </>
  );
};

export default SeasonsContainer;
