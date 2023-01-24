import React from 'react';

const CreateModelButton = ({setOptionSelect}) => {
  return (
    <div className='navButton' id="createModel" onClick={(e) => setOptionSelect(e.target.id)} >
      NEW MODEL
    </div>
  );
}

export default CreateModelButton;
