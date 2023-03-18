import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { format } from "date-fns";
import { IPersonDto, IUserDto, StatusEnum } from "./types/user.dto";

interface IAnimal {
  name: string;
  age: number;
}

function App() {
  const user: IPersonDto = {
    age: 12,
    friendsNames: ["Adam", "Mato", "Matej"],
  };
  console.log(user.name);

  const animals: IAnimal[] = [
    {
      name: "Cheetah",
      age: 12,
    },
    {
      name: "Owl",
      age: 2,
    },
  ];

  // const filteredAnimals = animals?.filter((animal) => animal.age > 3);

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  //filter -> filter IN

  return (
    <div className="App">
      {animals
        ?.filter((animal) => animal.age > 3)
        ?.map((animal) => animal.name)}
    </div>
  );
}

export default App;
