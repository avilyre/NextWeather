import React from "react";

import { Container, Title, Subtitle } from "./styles";

export function EmptyState(): JSX.Element {
  return (
    <Container>
      <Title>Vamos procurar!</Title>
      <Subtitle>Digite no campo de busca para encontrar lugares</Subtitle>
    </Container>
  );
}