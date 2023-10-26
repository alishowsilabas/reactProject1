import React, { useState } from "react";
import styles from "styled-components";
import Lista from "./assets/components/Lista";
import Add from "./assets/components/Add";

const App = () => {
  const heroisIniciais = [
    { nome: "Clark Kent", heroi: "Superman", descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat omnis molestias est autem itaque nostrum illo mollitia, porro consequuntur, rem quidem voluptates animi dolores, eveniet pariatur sequi maxime quae."},
    { nome: "Bruce Wayne", heroi: "Batman", descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolorem illo ex iste est molestiae provident maxime laboriosam. Temporibus sint eum dolorum voluptas aperiam, odit ipsa aut laudantium rerum officiis!" },
    { nome: "Diana Prince", heroi: "Wonder Woman", descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos autem rem ipsa nam. Asperiores neque amet soluta ut id temporibus placeat esse? Tenetur, dicta! Molestiae atque ab quam beatae nihil."},
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
