import React from 'react';

const VignetteSection = ({dataImg, dataText}) => {
  return (
    <div className='fullContainer flexCol'>
      {dataImg}
      <img src={`${process.env.REACT_APP_PICTURES}/assets/${dataImg}`} alt={dataText} />
    </div>
  );
}

export default VignetteSection;
