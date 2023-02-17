import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import TitleBloc from "../stdElements/TitleBloc";

const CreateUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("USER");

  const regexRequirement = /^[A-Za-zéèêùçà-]+$/;

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const firstNameHandle = (e) => {
    if (regexRequirement.test(e.target.value)) {
      setFirstName(e.target.value);
    }
  };

  const lastNameHandle = (e) => {
    if (regexRequirement.test(e.target.value)) {
      setLastName(e.target.value);
    }
  };

  const roleHandle = (e) => {
    setRole(e.target.id);
  };

  const validHandle = () => {};

  return (
    <>
      <div className="fullContainer">
        <TitleBloc title={"CREATION UTILISATEUR:"} />
      </div>
      
      <div className="newUser">
        <div className="newUser_data">
          <h2>DATA UTILISATEUR</h2>
          <form
            action=""
            name="signup"
            className="newUser_data--form"
            id="signup"
            onSubmit={validHandle}
          >
            <div className="newUser_data--bloc">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={emailHandle}
                value={email}
                required
                placeholder="xxxxxx.yyyyy@mail.com"
              />
            </div>

            <div className="newUser_data--bloc">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={passwordHandle}
                value={password}
                required
                placeholder="8 caractères minimum"
              />
            </div>

            <div className="newUser_data--bloc">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="firstname"
                name="firstname"
                id="firstname"
                onChange={firstNameHandle}
                value={firstName}
                required
                placeholder=""
              />
            </div>

            <div className="newUser_data--bloc">
              <label htmlFor="lastname">Nom</label>
              <input
                type="lastname"
                name="lastname"
                id="lastname"
                onChange={lastNameHandle}
                value={lastName}
                required
                placeholder=""
              />
            </div>

            <div className="newUser_data--bloc">
              <div
                className={
                  role === "USER"
                    ? "newUser_data--button buttonSelect"
                    : "newUser_data--button"
                }
                id="USER"
                onClick={roleHandle}
              >
                USER
              </div>

              <div
                className={
                  role === "ADMIN"
                    ? "newUser_data--button buttonSelect"
                    : "newUser_data--button"
                }
                id="ADMIN"
                onClick={roleHandle}
              >
                ADMIN
              </div>
            </div>
          </form>
        </div>
        <div className="newUser_avatar">
          <h2>AVATAR UTILISATEUR</h2>
        </div>
      </div>
    </>
  );
};

export default CreateUserForm;
