import React, {useState} from "react";

const Add = ({herois, setHerois}) => {
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
      <button>Incluir novo Heroi</button>
    </form>
  );
};

export default Add;
