import React, { useEffect, useState } from "react";
import Spinloader from "../stdElements/Spinloader";

const ModelsCarsPicture = ({ modelId }) => {
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
  }, []);

  const deletePicture = () => {
    if (window.confirm("Voulez-vous vraiment effacer l'image ?")) {
      // suppression image
    }
  };

  const changePicture = () => {};

  return fullPicture ? (
    <>
      {fullPicture.map((source) => (
        <>
          <div>
            <img
              src={`${process.env.REACT_APP_PICTURES}/modelcars/${source.pictureName}`}
              alt=""
            />
          </div>

          <div
            className="fa-solid fa-trash-can navicon redColor"
            onClick={deletePicture}
            title="Delete Picture"
          ></div>
          <div
            className="fa-solid fa-camera navicon redColor"
            onClick={changePicture}
            title="Change Picture"
          ></div>
        </>
      ))}
    </>
  ) : (
    <Spinloader />
  );
};

export default ModelsCarsPicture;
