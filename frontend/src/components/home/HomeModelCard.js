import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import modelPictDefault from "../../assets/modelPictDefault.jpg";

const HomeModelCard = ({ data }) => {
  const [imageName, setImageName] = useState('');
  const [imageValid, setImageValid] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (data) {
      async function fetchPictures() {
        const reponse = await fetch (`${process.env.REACT_APP_API_CARS}/pict/${data.model_id}`, {
          method: 'GET',    
        });
        if (reponse.ok) {
          const reponseJSON = await reponse.json();
          setImageName(reponseJSON.reponse.pictureName);
          setImageValid(true);
        } else {
          setImageValid(false);
        }
      };
      if (!imageName) fetchPictures();
    }
  }, []);

  const modelCarsHandle = (e) => {
    navigate(`/modelcars/${e.target.id}`);
  };

  return (
    <>
      <div className="modelcard_box" onClick={modelCarsHandle} >
        {imageValid ? (
          <img src={`${process.env.REACT_APP_PICTURES}/modelcars/${imageName}` } id={data.model_id} />
        ):(
          <img src={modelPictDefault} alt="" />
        )}
          
        <p>
          <strong>{`${data.model} - ${data.year}`}</strong><br/>
        {data.driver}<br/>
        {data.race}
        </p>
      </div>
    </>
  );
};

export default HomeModelCard;
