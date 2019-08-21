import React from "react";
import { Container } from "./styles";

export default function ListCard() {
  return (
    <Container>
      <li>
        <div>
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg"
            alt="Abomination (Emil Blonsky)"
          />
        </div>
        <div>
          <h2>Abomination (Emil Blonsky)</h2>
          <p>
            Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin
            working for the KGB, the Abomination gained his powers after
            receiving a dose of gamma radiation similar to that which
            transformed Bruce Banner into the incredible Hulk.
          </p>
        </div>
      </li>
    </Container>
  );
}
