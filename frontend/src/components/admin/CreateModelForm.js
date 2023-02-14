import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import TitleBloc from "../stdElements/TitleBloc";
import CreateModelInput from "./CreateModelInput";

// IMPORT REDUCERS
import { ADD_CAR } from "../../redux/carsSlice";

const CreateModelForm = () => {
  const [team, setTeam] = useState("");
  const [model, setModel] = useState("");
  const [season, setSeason] = useState(1950);
  const [driver, setDriver] = useState("");
  const [race, setRace] = useState("No race");
  const [manufacturer, setManufacturer] = useState("No manufacturer");
  const [reference, setReference] = useState("No reference");
  const [statusModel, setStatusModel] = useState("");

  const [qpos, setQpos] = useState("No result");
  const [qtime, setQtime] = useState("No time");
  const [rpos, setRpos] = useState("No result");
  const [rtime, setRtime] = useState("No time");
  const [blpos, setBLpos] = useState("No result");
  const [bltime, setBLtime] = useState("No time");

  const [modelPicture, setModelPicture] = useState("");
  const [pictureFile, setPictureFile] = useState();

  const [saveTheModel, setSaveTheModel] = useState(false);

  const [messageInfo, setMessageInfo] = useState("");
  const [messageError, setMessageError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (saveTheModel) {
      const dataModel = {
        team: team,
        model: model,
        year: season,
        driver: driver,
        race: race,
        manufacturer: manufacturer,
        reference: reference,
        status: statusModel,
        qualificationPosition: qpos,
        qualificationTime: qtime,
        racePosition: rpos,
        raceTime: rtime,
        bestLapPosition: blpos,
        bestLapTime: bltime,
      };

      const fetchCreateModel = async (dataModel) => {
        try {
          const reponse = await fetch(process.env.REACT_APP_API_CARS, {
            method: "POST",
            body: JSON.stringify(dataModel),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });

          if (reponse.ok) {
            const reponseJSON = await reponse.json();
            setMessageInfo("Le modèle a été enregistré dans la BdD !");
            console.log("REPONSE JSON BEFORE DISPATCH", reponseJSON);
            dispatch(ADD_CAR(reponseJSON.newCars));
            setMessageError("");

            if (modelPicture) {
              const newPicture = new FormData();
              newPicture.append("model_id", reponseJSON.newCars.model_id);
              newPicture.append("model_picture", pictureFile);

              (async () => {
                try {
                  const savingPicture = await fetch(
                    `${process.env.REACT_APP_API_PICT}`,
                    {
                      method: "POST",
                      body: newPicture,
                    }
                  );
                  if (savingPicture.ok) {
                    setMessageInfo("L'image a été enregistrée dans la BdD !");
                  }
                } catch (error) {
                  setMessageError("Erreur durant la sauvegarde de l'image !");
                }
              })();
            }
            navigate(`/modelcars/${reponseJSON.newCars.model_id}`);
          }
        } catch (error) {
          console.log("ERROR: ", error);
          setMessageInfo("");
          setMessageError("Erreur durant la sauvegarde du modèle !");
        }
      };
      fetchCreateModel(dataModel);
    }
  }, [saveTheModel, setSaveTheModel]);

  const insertPictureHandle = (e) => {
    setModelPicture(URL.createObjectURL(e.target.files[0]));
    setPictureFile(e.target.files[0]);
  };

  const cancelPictureHandle = () => {
    setModelPicture("");
    setPictureFile("");
  };

  return (
    <>
      <div className="fullContainer">
        <TitleBloc title={"NEW MODEL:"} />
      </div>

      <div className="newmodel">
        <CreateModelInput
          setTeam={setTeam}
          setModel={setModel}
          setSeason={setSeason}
          season={season}
          setDriver={setDriver}
          driver={driver}
          setRace={setRace}
          race={race}
          setManufacturer={setManufacturer}
          setReference={setReference}
          setStatusModel={setStatusModel}
          setSaveTheModel={setSaveTheModel}
          setQpos={setQpos}
          qpos={qpos}
          setQtime={setQtime}
          qtime={qtime}
          setRpos={setRpos}
          rpos={rpos}
          setRtime={setRtime}
          rtime={rtime}
          setBLpos={setBLpos}
          blpos={blpos}
          setBLtime={setBLtime}
          bltime={bltime}
        />

        <div className="newmodel_result">
          <h3>Informations Nouveau Modèle</h3>
          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Constructeur:</div>
            <div className="newmodel_result--group--right">{team}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Modèle:</div>
            <div className="newmodel_result--group--right">{model}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Année:</div>
            <div className="newmodel_result--group--right">{season}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Pilote:</div>
            <div className="newmodel_result--group--right">{driver}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Grand-Prix:</div>
            <div className="newmodel_result--group--right">{race}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Qualifications:</div>
            <div className="newmodel_result--group--right">{`${qpos} / ${qtime}`}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Résultat:</div>
            <div className="newmodel_result--group--right">{`${rpos} / ${rtime}`}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Meilleur tour:</div>
            <div className="newmodel_result--group--right">{`${blpos} / ${bltime}`}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Fabricant:</div>
            <div className="newmodel_result--group--right">{manufacturer}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Référence:</div>
            <div className="newmodel_result--group--right">{reference}</div>
          </div>

          <div className="newmodel_result--group">
            <div className="newmodel_result--group--left">Status:</div>
            <div className="newmodel_result--group--right">{statusModel}</div>
          </div>

          <div></div>
        </div>

        <div className="newmodel_picture">
          <h3>Ajouter une photo</h3>
          <div className="newmodel_picture--navbar">
            {modelPicture ? (
              <i
                className="fa-regular fa-trash-can navicon"
                onClick={cancelPictureHandle}
                title="Supprimer la photo"
              ></i>
            ) : (
              <>
                <i className="fa-solid fa-camera navicon"></i>
                <input
                  type="file"
                  name="modelPicture"
                  accept=".jpg, .jpeg, .png"
                  className="newmodel_picture--input"
                  onChange={insertPictureHandle}
                  title="Ajouter une photo"
                ></input>
              </>
            )}
          </div>

          <img src={modelPicture} alt="" />
        </div>
      </div>
      <div className="messageError">{messageError}</div>
      <div className="messageInfo">{messageInfo}</div>
    </>
  );
};

export default CreateModelForm;
