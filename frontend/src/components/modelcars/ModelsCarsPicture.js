import React, { useEffect, useState } from "react";
import Spinloader from "../stdElements/Spinloader";

const ModelsCarsPicture = ({ modelId, modifyPicture, setModifyPicture }) => {
  const [fullPicture, setFullPicture] = useState("");
  const [validPicture, setValidPicture] = useState(false);

  useEffect(() => {
    async function fetchModelPicture() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_PICT}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (reponse.ok) {
          const reponseJSON = await reponse.json(); 
          
          const reponseFilter = reponseJSON.filter((e) => e.model_id === parseInt(modelId.id));
          console.log("REPoNSEFILTER: ",reponseFilter)

          if (reponseFilter.length > 0 ) {
            setFullPicture(
              reponseJSON.filter((e) => e.model_id === parseInt(modelId.id))
            );
            setValidPicture(true);
          }
          setModifyPicture(false);
        }
      } catch (error) {
        console.log("FETCH MODEL PICTURE: ", error);
      }
    }
    fetchModelPicture();
  }, [modifyPicture, setModifyPicture]);

  const deletePicture = (e) => {
    if (window.confirm("Voulez-vous vraiment effacer l'image ?")) {
      // suppression image BDD
      const idDeleted = e.target.id;

      (async () => {
        try {
          const delPicture = await fetch(
            `${process.env.REACT_APP_API_PICT}/${idDeleted}`,
            {
              method: "DELETE",
            }
          );
          if (delPicture.ok) {
            console.log("L'image supprimée de la BdD !");
            setModifyPicture(true);
          }
        } catch (error) {
          console.log("Erreur durant la suppression de l'image !");
        }
      })();
    }
  };

  const changePicture = (e) => {
    const idChanged = e.target.id
    console.log("ID CHANGED: ", idChanged, " / ", modelId.id)

    const newFile = e.target.files[0];
    console.log("NEW FILE: ", newFile);

    const bodyRequest = new FormData();
    bodyRequest.append("model_id", modelId.id);
    bodyRequest.append("model_picture", newFile);

    (async () => {
      try {
        const changePicture = await fetch(
          `${process.env.REACT_APP_API_PICT}/${idChanged}`,
          {
            method: "PATCH",
            body: bodyRequest
          }
        );
        if (changePicture.ok) {
          console.log("L'image a été changée dans la BdD !");
          setModifyPicture(true);
        }
      } catch (error) {
        console.log("Erreur durant le changement d'image !");
      }
    })();
  };

  console.log("VALID PICTURE: ", validPicture)

  return validPicture ? (
    <>
      {fullPicture.map((source) => (
        <div className="gallery_box">
          <div className="gallery_box--picture">
            <img
              src={`${process.env.REACT_APP_PICTURES}/modelcars/${source.pictureName}`}
              alt=""
            />
          </div>
          <div className="gallery_box--bar">
            <div
              className="fa-solid fa-camera smallicon gallery_box--bar---icon"
            ></div>
            <input type="file" name="model_picture" title="Change Picture" onChange={changePicture} id={source.id}/>
            <div
              className="fa-solid fa-trash-can smallicon redColor"
              onClick={deletePicture}
              title="Delete Picture"
              id={source.id}
            ></div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <Spinloader />
  );
};

export default ModelsCarsPicture;
