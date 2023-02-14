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

const ModelcarsContainer = () => {
  const modelId = useParams();
  const allmodels = useSelector((state) => state.cars.data);
  const carData = allmodels.find((e) => e.model_id === parseInt(modelId.id));
  const carFullName = `${carData.year} - ${carData.model}: ${carData.driver}`;

  const [carTechnical, setCarTechnical] = useState();
  const [carPicture, setCarPicture] = useState("");

  const [modifyPicture, setModifyPicture] = useState(false);

  useEffect(() => {
    
    const carsOfYears = modelsData.find((e) => e.season == carData.year);

    const carsCompil = carsOfYears.cars;

    const carResult = carsCompil.find((e) => e.model === carData.model);
    setCarTechnical(carResult);

    setCarPicture(`modelPictures/${carResult.picture}`);

  }, []);

  return (
    <>
      <UserConnected />

      <div className="navbar">
        <DeleteModel />
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
      </div>

      <div className="fullContainer flexCol">
        <TitleBloc title={"Gallerie Photos"} />
        <AddModelPicture modelId={modelId} setModifyPicture={setModifyPicture} />
        <div className="gallery">
          <ModelsCarsPicture modelId={modelId} modifyPicture={modifyPicture} setModifyPicture={setModifyPicture} />
        </div>
      </div>
    </>
  );
};

export default ModelcarsContainer;
