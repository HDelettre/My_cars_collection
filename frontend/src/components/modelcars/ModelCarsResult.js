import React, { useState } from "react";

const ModelCarsResult = ({ carData }) => {
  const [editQualification, setEditQualification] = useState(false);
  const [qualifValue, setQualifValue] = useState(
    `${carData.qualificationPosition} - ${carData.qualificationTime}`
  );
  const [editResult, setEditResult] = useState(false);
  const [resultValue, setResultValue] = useState(
    `${carData.racePosition} - ${carData.raceTime}`
  );

  const [editBestLap, setEditBestLap] = useState(false);
  const [bestLapValue, setBestLapValue] = useState(
    `${carData.bestLapPosition} - ${carData.bestLapTime}`
  );

  const qualifHandle = (e) => {
    setQualifValue(e.target.value);
  };

  const resultHandle = (e) => {
    setResultValue(e.target.value);
  };

  const bestLapHandle = (e) => {
    setBestLapValue(e.target.value);
  };

  const qualifValidEdit = () => {
    // Vérification des deux paramètres espacés par un tiret

    // formatage des données

    // UPDATE DATABASE
    updateDataBase();

    setEditQualification(false);
  };

  const resultValidEdit = () => {
    // Vérification des deux paramètres espacés par un tiret

    // formatage des données

    // UPDATE DATABASE
    updateDataBase();

    setEditResult(false);
  };

  const bestLapValidEdit = () => {
    // Vérification des deux paramètres espacés par un tiret

    // formatage des données

    // UPDATE DATABASE
    updateDataBase();

    setEditBestLap(false);
  };

  const qualifCancelEdit = () => {
    setQualifValue(
      `${carData.qualificationPosition} - ${carData.qualificationTime}`
    );
    setEditQualification(false);
  };

  const resultCancelEdit = () => {
    setResultValue(`${carData.racePosition} - ${carData.raceTime}`);
    setEditResult(false);
  };

  const bestLapCancelEdit = () => {
    setBestLapValue(`${carData.bestLapPosition} - ${carData.bestLapTime}`);
    setEditBestLap(false);
  };

  async function updateDataBase() {
    const Qposition = qualifValue.split(" - ")[0];
    const Qtime = qualifValue.split(" - ")[1];
    const Rposition = resultValue.split(" - ")[0];
    const Rtime = resultValue.split(" - ")[1];
    const BLposition = bestLapValue.split(" - ")[0];
    const BLtime = bestLapValue.split(" - ")[1];

    const bodyRequest = {
      qualificationPosition: Qposition,
      qualificationTime: Qtime,
      racePosition: Rposition,
      raceTime: Rtime,
      bestLapPosition: BLposition,
      bestLapTime: BLtime,
    };

    const reponse = await  fetch(`${process.env.REACT_APP_API_CARS}/result/${carData.model_id}`, {
      method: "PATCH",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("REPONSE FROM FETCH: ", reponse);

    // DISPATCH


  }

  return (
    <>
      <div className="modelBox_card--line">
        <h4>Qualifications:</h4>

        {editQualification ? (
          <>
            <textarea
              id="qualification"
              value={qualifValue}
              onChange={(e) => {
                qualifHandle(e);
              }}
            >
              {qualifValue}
            </textarea>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={qualifValidEdit}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={qualifCancelEdit}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{qualifValue}</div>
            <div
              className="fa-regular fa-pen-to-square navicon"
              onClick={() => setEditQualification(true)}
            ></div>
          </>
        )}
      </div>

      <div className="modelBox_card--line">
        <h4>Résultat:</h4>
        {editResult ? (
          <>
            <textarea
              id="resultat"
              value={resultValue}
              onChange={(e) => {
                resultHandle(e);
              }}
            >
              {resultValue}
            </textarea>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={resultValidEdit}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={resultCancelEdit}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{resultValue}</div>
            <div
              className="fa-regular fa-pen-to-square navicon"
              onClick={() => setEditResult(true)}
            ></div>
          </>
        )}
      </div>

      <div className="modelBox_card--line">
        <h4>Meilleur Tour:</h4>
        {editBestLap ? (
          <>
            <textarea
              id="bestlap"
              value={bestLapValue}
              onChange={(e) => {
                bestLapHandle(e);
              }}
            >
              {bestLapValue}
            </textarea>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={bestLapValidEdit}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={bestLapCancelEdit}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{bestLapValue}</div>
            <div
              className="fa-regular fa-pen-to-square navicon"
              onClick={() => setEditBestLap(true)}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default ModelCarsResult;
