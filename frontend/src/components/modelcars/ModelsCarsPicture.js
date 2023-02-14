import React, { useEffect, useState } from "react";
import Spinloader from "../stdElements/Spinloader";

const ModelsCarsPicture = ({ modelId, modifyPicture, setModifyPicture }) => {
  const [fullPicture, setFullPicture] = useState("");

  useEffect(() => {
    async function fetchModelPicture() {
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_PICT}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const reponseJSON = await reponse.json();

        setFullPicture(
          reponseJSON.filter((e) => e.model_id === parseInt(modelId.id))
        );
      } catch (error) {
        console.log("FETCH MODEL PICTURE: ", error);
      }
    }
    fetchModelPicture();
  }, [modifyPicture, setModifyPicture]);

  const deletePicture = (e) => {
    if (window.confirm("Voulez-vous vraiment effacer l'image ?")) {
      // suppression image BDD
      console.log("DELETE PICTURE ID: ", e.target.id);
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

  const changePicture = () => {};

  console.log("FULL PICTURE: ", fullPicture);

  return fullPicture ? (
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
              className="fa-solid fa-camera smallicon"
              onClick={changePicture}
              title="Change Picture"
            ></div>
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
