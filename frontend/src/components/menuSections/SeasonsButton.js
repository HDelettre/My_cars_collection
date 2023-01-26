import React from "react";

const SeasonsButton = ({ setSeasonSelect }) => {
  
  const yearHandle = (e) => {
    setSeasonSelect(e.target.id)
  };

  let yearList = [];
  for (let i = 1950; i < 2022; i++) {
    yearList.push(<div className="seasonBox_button" key={i} id={i} onClick={yearHandle}>{i}</div>);
  };

  return (
    <div className='seasonBox'>
      {yearList}
    </div>
  );
};

export default SeasonsButton;
