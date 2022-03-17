import React from "react";
import { WeatherCard } from "../../components/WeatherCard";
import { weatherList } from "../../mocks/weatherList";

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

      <WeatherCards
        data={weatherList}
        renderItem={({ item }) => (
          <WeatherCard
            city={item.city}
            country={item.country}
            temperature={{
              highlight: item.temperature.highlight,
              details: {
                weather: item.temperature.details.weather,
                min: item.temperature.details.min,
                max: item.temperature.details.max
              }
            }}
            onPress={handleWeatherCard}
          />
        )}
      />
    </Container>
  );
}