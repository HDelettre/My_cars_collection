import React from 'react';

const CreateUserButton = ({setOptionSelect}) => {
  return (
    <div className='navButton' id="createUser" onClick={(e) => setOptionSelect(e.target.id)} >
      NEW USER
    </div>
  );
}

export default CreateUserButton;
