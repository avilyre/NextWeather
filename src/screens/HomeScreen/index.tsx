import React from "react";
import { WeatherCard } from "../../components/WeatherCard";
import { weatherDataList } from "../../mocks/weatherDataList";
import { EmptyState } from "./components/EmptyState";
import { WeatherList } from "./components/WeatherList";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
} from "./styles";

export function HomeScreen(): JSX.Element {
  function handleWeatherCard() {
    console.log("Puft!!");
  }

  return (
    <Container>
      <Header>
        <Title>Cidades</Title>
        <SearchButton>
          <Icon name="search" />
        </SearchButton>
      </Header>

      {weatherDataList
        ?
        (
          <WeatherList
            data={weatherDataList}
            onPressItem={handleWeatherCard}
          />
        )
        : <EmptyState />
      }
    </Container>
  );
}