import React from "react";
import { WeatherCard } from "../../components/WeatherCard";

import { EmptyState } from "./components/EmptyState";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
  WeatherCards
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

      <WeatherCards>
        <WeatherCard
          title="Cortês"
          country="Brasil"
          temperature={{
            highlight: "22°",
            details: {
              weather: "Nublado",
              min: "16°",
              max: "22°"
            }
          }}
        />
      </WeatherCards>

      {/* <EmptyState /> */}

      

    </Container>
  );
}