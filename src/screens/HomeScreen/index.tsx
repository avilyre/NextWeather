import React from "react";

import { EmptyState } from "./components/EmptyState";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
} from "./styles";

export function HomeScreen(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Cidades</Title>
        <SearchButton>
          <Icon name="search" />
        </SearchButton>
      </Header>

      <EmptyState />

    </Container>
  );
}