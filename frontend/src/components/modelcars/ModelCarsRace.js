import React, { useState, useEffect } from "react";

import image from "../../assets/modelPictDefault.jpg";

// IMPORT DATA
import fullDatabase from "../../bdd/fullDatabase";
import Spinloader from "../stdElements/Spinloader";

const ModelCarsRace = ({ carData }) => {
  const [raceData, setRaceData] = useState("");

  useEffect(() => {
    const seasonData = fullDatabase.find((e) => e.season == carData.year);
    const calendarData = seasonData.calendar;
    setRaceData(calendarData.find((e) => e.race === carData.race));
  }, []);

  return raceData ? (
    <>
      <div className="modelBox_card--line">
        <h4>Evénement:</h4>
        <div className="modelBox_card--data">
          {`${carData.race}`}
          <img
            src={`${process.env.REACT_APP_PICTURES}/flags/${raceData.flag}`}
            alt={raceData.flag}
          />
        </div>
      </div>

      <div className="modelBox_card--line">
        <h4>Circuit:</h4>
        <div className="modelBox_card--data">{raceData.track}</div>
      </div>

      <div className="modelBox_card--track">
        <img
          src={`${process.env.REACT_APP_PICTURES}/tracks/${raceData.picture}`}
          alt={raceData.picture}
        />
      </div>
    </>
  ) : (
    <Spinloader />
  );
};

export default ModelCarsRace;
