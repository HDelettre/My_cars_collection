import React from "react";

const AddModelPicture = ({ modelId, setModifyPicture }) => {

  const buttonHandle = (e) => {
    const newPicture = e.target.files[0];
    console.log(newPicture, " / ", modelId.id);

    const bodyRequest = new FormData();
    bodyRequest.append("model_id", modelId.id);
    bodyRequest.append("model_picture", newPicture);

    (async () => {
      try {
        const savingPicture = await fetch(`${process.env.REACT_APP_API_PICT}`, {
          method: "POST",
          body: bodyRequest,
        });
        if (savingPicture.ok) {
          console.log("L'image a été enregistrée dans la BdD !");
          setModifyPicture(true);
        }
      } catch (error) {
        console.log("Erreur durant la sauvegarde de l'image !");
      }
    })();
  };

  return (
    <>
      <div className="navBarPicture">
        <div className="fa-solid fa-camera navBarPicture_icon"></div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          name="model_picture"
          title="Ajouter une photo"
          onChange={buttonHandle}
        />
      </div>
    </>
  );
};

export default AddModelPicture;
