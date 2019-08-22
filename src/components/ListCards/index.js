import React from "react";

import Card from "../Card";
import { Container } from "./styles";

import characters from "../../data";

export default function ListCard() {
  const { results } = characters.data;

  return (
    <Container>
      {results.map(character => (
        <Card
          imgCharacter={`${character.thumbnail.path}.${
            character.thumbnail.extension
          }`}
          nameCharacter={character.name}
          description={
            character.description
              ? character.description
              : "Não foi definida uma descrição!"
          }
        />
      ))}
    </Container>
  );
}
