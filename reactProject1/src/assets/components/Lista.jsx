import React from "react";

const Lista = ({ herois, setHerois }) => {
  const handleDelete = (heroi) => {
    setHerois(herois.filter((item) => item.heroi != heroi));
  };
  return (
    <div>
      {herois.map((item) => {
        return (
          <div key={item.nome}>
            <h1>{item.heroi}</h1>
            <h2>{item.nome}</h2>
            <button onClick={(event) => handleDelete(item.heroi)}>
              Apagar {item.heroi}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Lista;
