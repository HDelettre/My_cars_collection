import React, { useState } from "react";

// IMPORT DATA
import manufacturerCollection from "../../bdd/manufacturerCollection";

const ModelsCarsMiniature = ({ carData }) => {
  const [editManufacturer, setEditManufacturer] = useState(false);
  const [manufacturerValue, setManufacturerValue] = useState(
    carData.manufacturer
  );

  const [editReference, setEditReference] = useState(false);
  const [referenceValue, setReferenceValue] = useState(carData.reference);

  const [editStatus, setEditStatus] = useState(false);
  const [statusValue, setStatusValue] = useState(carData.status);

  const statusCode = manufacturerCollection[1].codeStatus;

  const manufacturerHandle = (e) => {
    setManufacturerValue(e.target.value);
  };

  const manufacturerValid = () => {
    // Mettre à jour la BDD
    modelCarUpdate();
    setEditManufacturer(false);
  };

  const manufacturerCancel = () => {
    setManufacturerValue(carData.manufacturer);
    setEditManufacturer(false);
  };

  const referenceHandle = (e) => {
    setReferenceValue(e.target.value);
  };

  const referenceValid = () => {
    // Mettre à jour la BDD
    modelCarUpdate();
    setEditReference(false);
  };

  const referenceCancel = () => {
    setReferenceValue(carData.reference);
    setEditReference(false);
  };

  const statusHandle = () => {
    const statusSelect = document.getElementById("editStatus");
    const newStatus = statusSelect.options[statusSelect.selectedIndex].value;
setStatusValue(newStatus);
  };

  const statusValid = () => {
    // Mettre à jour la BDD
    modelCarUpdate();
    setEditStatus(false);
  };

  const statusCancel = () => {
    setStatusValue(carData.status);
    setEditStatus(false);
  };

  async function modelCarUpdate() {
    const bodyRequest = {
      manufacturer: manufacturerValue,
      reference: referenceValue,
      status: statusValue
    }

    const reponse = await  fetch(`${process.env.REACT_APP_API_CARS}/${carData.model_id}`, {
      method: "PATCH",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("REPONSE FROM FETCH: ", reponse);

    // DISPATCH
  };

  return (
    <>
      <h3>MINIATURE:</h3>

      <div className="modelBox_card--line">
        <h4>Fabricant:</h4>
        {editManufacturer ? (
          <>
            <textarea
              id="manufacturer"
              value={manufacturerValue}
              onChange={(e) => {
                manufacturerHandle(e);
              }}
            >
              {manufacturerValue}
            </textarea>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={() => manufacturerValid()}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={() => manufacturerCancel()}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{manufacturerValue}</div>
            <div
              className="fa-regular fa-pen-to-square navicon"
              onClick={() => setEditManufacturer(true)}
            ></div>
          </>
        )}
      </div>

      <div className="modelBox_card--line">
        <h4>Reference:</h4>
        {editReference ? (
          <>
            <textarea
              value={referenceValue}
              onChange={(e) => {
                referenceHandle(e);
              }}
            >
              {referenceValue}
            </textarea>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={() => referenceValid()}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={() => referenceCancel()}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{referenceValue}</div>
            <div
              className="fa-regular fa-pen-to-square navicon"
              onClick={() => setEditReference(true)}
            ></div>
          </>
        )}
      </div>

      <div className="modelBox_card--line">
        <h4>Status:</h4>
        {editStatus ? (
          <>
            <select name="editStatus" id="editStatus" onChange={statusHandle} >
            {statusCode.map((e) => <option name={e} id={e} key={e}>{e}</option> )}
            </select>
            <div
              className="fa-regular fa-square-check navicon"
              onClick={() => statusValid()}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark navicon redColor"
              onClick={() => statusCancel()}
            ></div>
          </>
        ) : (
          <>
            <div className="modelBox_card--data">{statusValue}</div>
            <div className="fa-regular fa-pen-to-square navicon" onClick={() => setEditStatus(true)} ></div>
          </>
        )}
      </div>
    </>
  );
};

export default ModelsCarsMiniature;
