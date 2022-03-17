import React from "react";
import { WeatherCard } from "../../components/WeatherCard";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
  WeatherCards
} from "./styles";

export function HomeScreen(): JSX.Element {
  function handleWeatherCard() {
    // TODO: Implement WeatherCard action
  }

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
          city="Cortês"
          country="Brasil"
          temperature={{
            highlight: "22°",
            details: {
              weather: "Nublado",
              min: "16°",
              max: "22°"
            }
          }}
          onPress={handleWeatherCard}
        />
      </WeatherCards>
    </Container>
  );
}