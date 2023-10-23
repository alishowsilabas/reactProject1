import React, { useState } from "react";
import styles from "styled-components";
import Lista from "./assets/components/Lista";
import Add from "./assets/components/Add";

const App = () => {
  const heroisIniciais = [
    { nome: "Clark Kent", heroi: "Superman" },
    { nome: "Bruce Wayne", heroi: "Batman" },
    { nome: "Diana Prince", heroi: "Wonder Woman" },
  ];

  const [herois, setHerois] = useState(heroisIniciais);

  return (
    <Div>
      <Lista herois={herois} setHerois={setHerois} />
      <Add herois={herois} setHerois={setHerois} />
    </Div>
  );
};

const Div = styles.div`
  text-align: center;
`;

export default App;
