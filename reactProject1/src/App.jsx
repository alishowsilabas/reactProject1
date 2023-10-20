import React, { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const heroisIniciais = [
    { nome: "Clark Kent", heroi: "Superman" },
    { nome: "Bruce Wayne", heroi: "Batman" },
    { nome: "Diana Prince", heroi: "Wonder Woman" },
  ];

  const [herois, setHerois] = useState(heroisIniciais);

  return (
    <div>
      {herois.map((item) => {
        return (
          <div className={classes.mainText}>
            <h1>{item.heroi}</h1>
            <h2>{item.nome}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
