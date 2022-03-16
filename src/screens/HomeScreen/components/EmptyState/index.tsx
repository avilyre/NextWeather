import React from "react";

import { Text } from "react-native";

import { Container, Title, Subtitle } from "./styles";

export function EmptyState(): JSX.Element {
  return (
    <Container>
      <Title>Parece que você ainda não adicionou uma cidade</Title>
      <Subtitle>Tente adicionar uma cidade usando o botão de busca</Subtitle>
    </Container>
  );

  return 
}