import React from 'react';

const TitleBlocPlus = ({title, image}) => {
  return (
    <div className='titleBloc'>
      {title}
      <img src={`${process.env.REACT_APP_PICTURES}/${image}`} alt={title} />
    </div>
  );
}

export default TitleBlocPlus;
