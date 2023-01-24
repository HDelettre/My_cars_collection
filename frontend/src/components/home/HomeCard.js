import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({data}) => {
  const navigate = useNavigate();
  
  const navigationHandle = (e) => {
    navigate(`/${e.target.id}`);
  };

  return (
    <div className="homeContainer">
      <div className='image'>
        <img
        crossOrigin="anonymous"
        src={`${process.env.REACT_APP_PICTURES}/assets/${data.imageUrl}`}
        alt={data.title}
        onClick={navigationHandle}
        id={data.section}
      />
      </div>
      
      <h3>{data.title}</h3>
    </div>
  );
}

export default HomeCard;
