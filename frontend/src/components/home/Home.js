import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import TitleBloc from "../stdElements/TitleBloc";
import HomeCard from "./HomeCard";
import LoginButton from "../boutons/LoginButton";
import Spinloader from "../stdElements/Spinloader";

// IMPORT DATA
import dataSection from "../../bdd/data.home";
import HomeModelCard from "./HomeModelCard";

const Home = () => {
  const [threeEnd, setThreeEnd] = useState("");

  useEffect(() => {
    (async () => {
      const reponse = await fetch(`${process.env.REACT_APP_API_CARS}`, {
        method: "GET",
      });
      const reponseJSON = await reponse.json();
      setThreeEnd(reponseJSON.slice(-3));
    })();
  }, [setThreeEnd]);

  return (
    <>
      <div className="navbar">
        <LoginButton />
      </div>

      <div className="fullContainer flexCol">
        <TitleBloc title={"Les Sections du Site:"} />

        <div className="fullContainer">
          {dataSection.map((data) => (
            <HomeCard data={data} key={data._id} />
          ))}
        </div>

        {threeEnd != "" ? (
          <>
            <TitleBloc title={"Les Derniers Modèles:"} />
            <div className="modelcard">
              {threeEnd.map((data) => (
                <HomeModelCard data={data} key={data.model_id} />
              ))}
            </div>
          </>
        ) : (
          <Spinloader />
        )}
      </div>
    </>
  );
};

export default Home;
