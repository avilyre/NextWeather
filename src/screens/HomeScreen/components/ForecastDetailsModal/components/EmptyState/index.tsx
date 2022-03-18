import React from "react";

import { Container, Title, Subtitle } from "./styles";

export function EmptyState(): JSX.Element {
  return (
    <Container>
      <Title>Buscando informações</Title>
      <Subtitle>Aguarde um momento ;)</Subtitle>
    </Container>
  );
}