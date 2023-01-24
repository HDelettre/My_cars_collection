import React, { useState } from 'react';

// IMPORT COMPONENTS
import HomeButton from '../boutons/HomeButton';
import CreateModelForm from './CreateModelForm';
import CreateModelButton from '../boutons/CreateModelButton';
import CreateUserButton from '../boutons/CreateUserButton';
import CreateUserForm from './CreateUserForm';

const AdminContainer = () => {
  const [optionSelect, setOptionSelect] = useState("createModel");

  return (
    <>
      <div className='navbar'>
        <CreateModelButton setOptionSelect={setOptionSelect} />
        <CreateUserButton setOptionSelect={setOptionSelect} />
        <HomeButton />
      </div>

      { optionSelect === "createModel" ? (
        <CreateModelForm />
      ) : ("")}

{ optionSelect === "createUser" ? (
        <CreateUserForm />
      ) : ("")}
    </>
  );
}

export default AdminContainer;
