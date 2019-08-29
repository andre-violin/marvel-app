import React, { useState, useEffect } from "react";

import characters from "../../data";

import { Container } from "./styles";

export default function({ match }) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    setCharacter(characters.data.results);
    console.table(character);
  }, [character]);

  return (
    <Container>
      <header>
        <h2>Nome</h2>
      </header>
      <div>
        <img src="/caminho" alt="Nome do personagem" />
        <p>Biografia completa</p>
      </div>
    </Container>
  );
}
