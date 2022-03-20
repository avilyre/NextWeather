import React from "react";

import { Container, Title, Subtitle } from "./styles";

export function EmptyState(): JSX.Element {
  return (
    <Container>
      <Title>Carregando</Title>
    </Container>
  );
}