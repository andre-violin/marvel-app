import React from "react";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>MarvelApp</h1>
      <nav>
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>
    </Container>
  );
}
