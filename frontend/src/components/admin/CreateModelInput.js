import React, { useEffect, useState } from "react";

import Spinloader from "../stdElements/Spinloader";

// IMPORT DATA
import fullDatabase from "../../bdd/fullDatabase";
import dataCollection from "../../bdd/manufacturerCollection";

const CreateModelInput = ({
  setTeam,
  setModel,
  setSeason,
  season,
  setDriver,
  setRace,
  setManufacturer,
  setReference,
  setStatusModel,
  setSaveTheModel
}) => {
  const [optionStep, setOptionStep] = useState(0);
  const [dataSeason, setDataSeason] = useState();
  const [carsList, setCarsList] = useState();
  const [racesList, setRacesList] = useState();
  const [driversList, setDriversList] = useState();
  const [manufacturersList, setManufacturersList] = useState();
  const [statusList, setStatusList] = useState();
  const [checkValid, setCheckValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setDataSeason(fullDatabase.find((e) => e.season === season));
  }, [season, setDataSeason]);

  const validButtonHandle = () => {
    if (checkValid) {
      setCheckValid(false);
      if (optionStep === 0) {
        setCarsList(
          dataSeason.cars.sort((a, b) => (a.model > b.model ? 1 : -1))
        );
      }
      if (optionStep === 2) {
        setRacesList(dataSeason.calendar);
        setRace("No Race");
        setCheckValid(true);
      }
      if (optionStep === 3) {
        setManufacturersList(dataCollection[0].manufacturer);
        setManufacturer("No Manufacturer");
        setReference('No Reference');
        setCheckValid(true);
      }
      if (optionStep === 4) {
        setStatusList(dataCollection[1].codeStatus);
        setStatusModel("En vitrine");
        setCheckValid(true);
      }

      setErrorMessage("");

      nextStep();
    } else {
      setErrorMessage("ERREUR DE SAISIE");
    }
  };

  const nextStep = () => {
    setOptionStep(optionStep + 1);
  };

  const selectSeason = (e) => {
    setSeason(e.target.value);
    setDataSeason(fullDatabase.find((e) => e.season === season));
    setCheckValid(true);
  };

  const selectCarsHandle = () => {
    const carsSelect = document.getElementById("carsChoice");
    const modelSelected = carsSelect.options[carsSelect.selectedIndex].value;
    setModel(modelSelected);
    const modelData = carsList.find((e) => e.model === modelSelected);
    setTeam(modelData.team);
    setDriversList(modelData.drivers);
    setCheckValid(true);
  };

  const selectDriversHandle = () => {
    const driversSelect = document.getElementById("driversChoice");
    const driverSelected =
      driversSelect.options[driversSelect.selectedIndex].value;
    setDriver(driverSelected);
    setCheckValid(true);
  };

  const selectRacesHandle = () => {
    const racesSelect = document.getElementById("racesChoice");
    const raceSelected = racesSelect.options[racesSelect.selectedIndex].value;
    setRace(raceSelected);
    setCheckValid(true);
  };

  const selectManufacturersHandle = () => {
    const manufacturersSelect = document.getElementById("manufacturersChoice");
    const manufacturerSelected =
      manufacturersSelect.options[manufacturersSelect.selectedIndex].value;
    setManufacturer(manufacturerSelected);
    setCheckValid(true);
  };

  const selectStatusHandle = () => {
    const statusSelect = document.getElementById("statusChoice");
    const statusSelected =
      statusSelect.options[statusSelect.selectedIndex].value;
    setStatusModel(statusSelected);
    setCheckValid(true);
  };

  return (
    <>
      <div className="newmodel_input">
        {optionStep === 0 ? (
          <>
            <h3>Choisissez l'année</h3>
            <input
              type="number"
              value={season}
              min="1950"
              max="2022"
              onChange={selectSeason}
            />
          </>
        ) : (
          ""
        )}

        {optionStep === 1 ? (
          <>
            <h3>Choisissez le modèle</h3>
            <select
              name="carsChoice"
              id="carsChoice"
              onChange={selectCarsHandle}
            >
              <option value="noModel">Choix du Modèle</option>
              {carsList.map((data) => (
                <option value={data.model} key={data.model}>
                  {data.model}
                </option>
              ))}
            </select>
          </>
        ) : (
          ""
        )}

        {optionStep === 2 ? (
          <>
            <h3>Sélectionner le pilote</h3>
            <select
              name="driversChoice"
              id="driversChoice"
              onChange={selectDriversHandle}
            >
              <option value="noDriver">Choix du Pilote</option>
              {driversList.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </select>
          </>
        ) : (
          ""
        )}

        {optionStep === 3 ? (
          <>
            <h3>Sélectionner la course</h3>
            <select
              name="racesChoice"
              id="racesChoice"
              onChange={selectRacesHandle}
            >
              <option value="noRace">Pas de course</option>
              {racesList.map((data) => (
                <option value={data.race} key={data.race}>
                  {data.race}
                </option>
              ))}
            </select>
          </>
        ) : (
          ""
        )}

        {optionStep === 4 ? (
          <>
            <h3>Sélectionner le fabricant</h3>
            <select
              name="manufacturersChoice"
              id="manufacturersChoice"
              onChange={selectManufacturersHandle}
            >
              <option value="noManufacturer">Pas de Fabricant</option>
              {manufacturersList.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Référence"
              onChange={(e) => setReference(e.target.value)}
            ></input>
          </>
        ) : (
          ""
        )}

        {optionStep === 5 ? (
          <>
            <h3>Sélectionner le status</h3>
            <select
              name="statusChoice"
              id="statusChoice"
              onChange={selectStatusHandle}
            >
              {statusList.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </select>
          </>
        ) : (
          ""
        )}

          {optionStep < 6 ? (
            <div
          className={checkValid ? "validButton" : "noValidButton"}
          onClick={validButtonHandle}
        >
          VALIDER
        </div>
          ):(<div>
            <h3>Enregistrer le modèle</h3>
            <div className="validButton" onClick={() => setSaveTheModel(true) } >Save the Model</div>
          
          </div>)}
        
        <div>{errorMessage}</div>
      </div>
    </>
  );
};

export default CreateModelInput;
