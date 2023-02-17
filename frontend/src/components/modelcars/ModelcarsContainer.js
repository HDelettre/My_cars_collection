import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import UserConnected from "../stdElements/UserConnected";
import HomeButton from "../boutons/HomeButton";
import TitleBloc from "../stdElements/TitleBloc";
import Spinloader from "../stdElements/Spinloader";
import AddModelPicture from "../boutons/AddModelPicture";
import DeleteModel from "../boutons/DeleteModel";
import ModelsCarsMiniature from "./ModelsCarsMiniature";
import ModelCarsRace from "./ModelCarsRace";
import ModelCarsResult from "./ModelCarsResult";
import TitleBlocPlus from "../stdElements/TitleBlocPlus";

// IMPORT DATA
import modelsData from "../../bdd/carsCollection";
import ModelsCarsPicture from "./ModelsCarsPicture";
import fullDatabase from "../../bdd/fullDatabase";

const ModelcarsContainer = () => {
  const modelId = useParams();
  const allmodels = useSelector((state) => state.cars.data);
  const carData = allmodels.find((e) => e.model_id === parseInt(modelId.id));
  const carFullName = `${carData.year} - ${carData.model}: ${carData.driver}`;

  const [carTechnical, setCarTechnical] = useState();
  const [carPicture, setCarPicture] = useState("");

  const [modifyPicture, setModifyPicture] = useState(false);

  const [chptDriverResult, setChptDriverResult] = useState(["Non Classé", "0"]);
  const [chptTeamsResult, setChptTeamsResult] = useState(["Non Classé", "0"]);

  useEffect(() => {
    const carsOfYears = modelsData.find((e) => e.season == carData.year);

    const carsCompil = carsOfYears.cars;

    const carResult = carsCompil.find((e) => e.model === carData.model);
    console.log("CAR RESULT: ", carResult);
    if (carResult) {
      setCarTechnical(carResult);

      setCarPicture(`modelPictures/${carResult.picture}`);
    }

    const chpt = fullDatabase.find((e) => e.season == carData.year);
    const chptPilotes = chpt.chpt_pilotes;
    const piloteResult = chptPilotes.find((e) => e.driver === carData.driver);
    if (piloteResult !== undefined) {
      setChptDriverResult([piloteResult.position, piloteResult.points]);
    }

    if (carData.year > 1957) {
      const chptConstructeurs = chpt.chpt_constructeurs;
      const constructeurResult = chptConstructeurs.find((e) =>
        e.team.includes(carData.team)
      );
      if (constructeurResult !== undefined) {
        setChptTeamsResult([
          constructeurResult.position,
          constructeurResult.points,
        ]);
      }
      console.log("CHPT CONST", constructeurResult);
    }
  }, []);

  return (
    <>
      <UserConnected />

      <div className="navbar">
        <DeleteModel carData={carData} />
        <HomeButton />
      </div>

      <div className="fullContainer flexCol">
        <TitleBlocPlus title={carFullName} image={carPicture} />

        <div className="modelBox">
          {carTechnical ? (
            <div className="modelBox_card">
              <ModelsCarsMiniature carData={carData} />

              <h3>TECHNIQUE:</h3>
              <div className="modelBox_card--line">
                <h4>Moteur:</h4>
                <div className="modelBox_card--data">{`${carTechnical.engine}`}</div>
              </div>

              <div className="modelBox_card--line">
                <h4>Architecture:</h4>
                <div className="modelBox_card--data">{`${carTechnical.type} ${carTechnical.accessories}`}</div>
              </div>

              <div className="modelBox_card--line">
                <h4>Cylindrée:</h4>
                <div className="modelBox_card--data">
                  {`${carTechnical.displacement} `}cm<sup>3</sup>
                </div>
              </div>

              <div className="modelBox_card--line">
                <h4>Pneumatiques:</h4>
                <div className="modelBox_card--data">{`${carTechnical.tyres}`}</div>
              </div>

              <div className="modelBox_card--line">
                <h4>Designers:</h4>
                <div className="modelBox_card--data">
                  {carTechnical.designers.map((e) => (
                    <>
                      {e}
                      <br />
                    </>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Spinloader />
          )}

          <div className="verticalLine"></div>

          <div className="modelBox_card">
            {carData.race === "No Race" ? (
              ""
            ) : (
              <>
                <h3>GRAND PRIX</h3>
                <ModelCarsRace carData={carData} />
                <ModelCarsResult carData={carData} />
              </>
            )}
          </div>
        </div>

        <div className="modelBox_card--chpt">
          <h2>CLASSEMENT AU CHAMPIONNAT DU MONDE {carData.year}</h2>
          <strong>Championnat Pilote:   </strong>
          {chptDriverResult[0] === "Non Classé" ? (
           chptDriverResult[0]
          ) : (
            <>
              {chptDriverResult[0]}<sup>ème</sup> avec {chptDriverResult[1]} point(s)
            </>
          )}

          {carData.year > 1957 ? (
            <>
              <br />
              <strong>{`Championnat Constructeurs:   `}</strong>
              {chptTeamsResult[0] === "Non Classé" ? (
                chptTeamsResult[0]
              ) : (
                <>
                  {chptTeamsResult[0]}<sup>ème</sup> avec {chptTeamsResult[1]} point(s)
                </>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="fullContainer flexCol">
        <TitleBloc title={"Gallerie Photos"} />
        <AddModelPicture
          modelId={modelId}
          setModifyPicture={setModifyPicture}
        />
        <div className="gallery">
          <ModelsCarsPicture
            modelId={modelId}
            modifyPicture={modifyPicture}
            setModifyPicture={setModifyPicture}
          />
        </div>
      </div>
    </>
  );
};

export default ModelcarsContainer;
