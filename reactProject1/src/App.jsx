import React, { useState } from "react";
import styles from "styled-components";

const App = () => {
  const heroisIniciais = [
    { nome: "Clark Kent", heroi: "Superman" },
    { nome: "Bruce Wayne", heroi: "Batman" },
    { nome: "Diana Prince", heroi: "Wonder Woman" },
  ];

  const [herois, setHerois] = useState(heroisIniciais);
  const [novoHeroi, setNovoHeroi] = useState({
    nome: "",
    heroi: "",
  });

  const handleChange = (event) => {
    setNovoHeroi({
      ...novoHeroi,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHerois([...herois, novoHeroi]);
    setNovoHeroi({
      nome: "",
      heroi: "",
    });
  };

  return (
    <Div>
      <div>
        {herois.map((item) => {
          return (
            <div key={item.nome}>
              <h1>{item.heroi}</h1>
              <h2>{item.nome}</h2>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Heroi"
          value={novoHeroi.heroi}
          name="heroi"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Nome"
          value={novoHeroi.nome}
          name="nome"
        />
        <button>Incluir Novo Heroi</button>
      </form>
      <div></div>
    </Div>
  );
};

const Div = styles.div`
  text-align: center;
`;

export default App;
