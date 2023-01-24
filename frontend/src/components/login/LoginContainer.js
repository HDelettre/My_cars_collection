import React from "react";

// IMPORT COMPONENTS
import HomeButton from "../boutons/HomeButton";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <>
      <div className="navbar">
        <HomeButton />
      </div>

      <div className="halfContainer flexCol center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginContainer;
