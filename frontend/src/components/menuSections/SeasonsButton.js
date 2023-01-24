import React from "react";

const SeasonsButton = ({ setSeasonSelect }) => {
  const seasonHandle = (e) => {
    setSeasonSelect(e.target.id);
  };

  let seasonList = [];
  for (let i = 1950; i < 2023; i++) {
    seasonList.push(
      <div className="seasonBox_button" key={i} id={i} onClick={seasonHandle}>
        {i}
      </div>
    );
  }

  return <div className="seasonBox">
    {seasonList}
  </div>;
};

export default SeasonsButton;
