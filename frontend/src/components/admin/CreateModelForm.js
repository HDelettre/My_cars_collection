import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import TitleBloc from "../stdElements/TitleBloc";
import CreateModelInput from "./CreateModelInput";

const CreateModelForm = () => {
  const [team, setTeam] = useState("");
  const [model, setModel] = useState("");
  const [season, setSeason] = useState(1950);
  const [driver, setDriver] = useState("");
  const [race, setRace] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [reference, setReference] = useState("");
  const [statusModel, setStatusModel] = useState("");

  const [modelPicture, setModelPicture] = useState("");
  const [pictureFile, setPictureFile] = useState();

  const [saveTheModel, setSaveTheModel] = useState(false);

  const [messageInfo, setMessageInfo] = useState("");
  const [messageError, setMessageError] = useState("");

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
            setMessageError("");

            if (modelPicture) {
              const newPicture = new FormData();
              newPicture.append("model_id", reponseJSON.newCars.model_id);
              newPicture.append("model_picture", pictureFile);

              (async () => {
                try {
                  const savingPicture = await (fetch(
                    `${process.env.REACT_APP_API_CARS}/pict`,
                    {
                      method: "POST",
                      body: newPicture
                    }
                  ));
                  if (savingPicture.ok) {
                    setMessageInfo("L'image a été enregistrée dans la BdD !")
                  }
                } catch (error) {
                  setMessageError("Erreur durant la sauvegarde de l'image !");
                }
              })();
      }



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
          setRace={setRace}
          setManufacturer={setManufacturer}
          setReference={setReference}
          setStatusModel={setStatusModel}
          setSaveTheModel={setSaveTheModel}
        />

        <div className="newmodel_result">
          <h3>Informations Nouveau Modèle</h3>
          Constructeur: {team}
          <br />
          Model: {model}
          <br />
          Année: {season}
          <br />
          Pilote: {driver}
          <br />
          Grand prix: {race}
          <br />
          Fabricant: {manufacturer}
          <br />
          Reference: {reference}
          <br />
          Status: {statusModel}
          <br />
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

        <div>{messageError}</div>
        <div>{messageInfo}</div>
      </div>
    </>
  );
};

export default CreateModelForm;
