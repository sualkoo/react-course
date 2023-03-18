import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { format } from "date-fns";
import { IPersonDto, IUserDto, StatusEnum } from "./types/user.dto";

function App() {
  const user: IPersonDto = {
    age: 12,
    friendsNames: ["Adam", "Mato", "Matej"],
  };
  console.log(user.name);

  const displayOnlyActiveUsers = () => {
    if (user.status === StatusEnum.ACTIVE) {
      console.log("active user");
    } else if (user?.status === StatusEnum.PASSIVE) {
      console.log("passive user");
    }
  };

  displayOnlyActiveUsers();

  const date = new Date();
  const num = 2;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
