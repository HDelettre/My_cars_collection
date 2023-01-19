import React from 'react';

const HomeCard = ({data}) => {

  return (
    <div className="homeContainer">
      <div className='image'>
        <img
        crossOrigin="anonymous"
        src={`${process.env.REACT_APP_PICTURES}/assets/${data.imageUrl}`}

        alt=""
        
        id={data.section}
      />
      </div>
      
      <h3>{data.title}</h3>
    </div>
  );
}

export default HomeCard;
