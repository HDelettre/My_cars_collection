import React, {useEffect, useState} from "react";

// IMPORT COMPONENTS
import TitleBloc from "../stdElements/TitleBloc";
import HomeCard from "./HomeCard";
import LoginButon from "../boutons/LoginButon";

// IMPORT DATA
import dataSection from "../../bdd/data.home";

const Home = () => {
  const[allModels, setAllModels] = useState('');

useEffect(() => {
  ( async () => {
const reponse = await fetch("http://localhost:5001/api/cars", {
    method: "GET"
  });
  const reponseJSON = await reponse.json();
  setAllModels(reponseJSON);
  console.log("reponsejson: ", reponseJSON)
  })();
}, [setAllModels]);
  
  return (
    <>
      <div className="navbar">
        <LoginButon />
      </div>

      <div className="fullContainer flexCol">
        <TitleBloc title={"Les Sections du Site:"} />

        <div className="fullContainer">
          {dataSection.map((data) => 
            <HomeCard data={data} key={data._id} />
          )}
        </div>

{allModels != "" ? (
  <>
  <TitleBloc title={"Les Derniers Modèles:"} />
        <div>
          Les 3 derniers modèles
        </div>
  </>
) : ('')}
        
      </div>
    </>
  );
};

export default Home;
