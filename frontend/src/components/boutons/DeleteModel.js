import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteModel = ({carData}) => {

  const navigate = useNavigate();

  const buttonHandle = () => {
    if (window.confirm("Etes-vous sur de vouloir supprimer de modèle ?")) {
      (async () => {
        try {
          const reponse = await fetch(`${process.env.REACT_APP_API_CARS}/${carData.model_id}`, {
            method: "DELETE"
          });
          console.log("MODEL DELETED");
          navigate("/");

        } catch (error) {
          console.log("ERROR DURING DELETE MODEL", error)
        }
      })();
    };
    
  };

  return (
    <div className="navButton" onClick={buttonHandle}>
      SUPPRIMER
    </div>
  );
}

export default DeleteModel;
