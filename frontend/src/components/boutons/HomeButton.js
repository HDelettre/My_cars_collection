import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const buttonHandle = () => {
    navigate("/");
  };

  return (
    <div className="navButton" onClick={buttonHandle}>
      HOME
    </div>
  );
};

export default HomeButton;
