import React from "react";
import { WeatherCard } from "../../components/WeatherCard";
import { weatherDataList } from "../../mocks/weatherDataList";
import { EmptyState } from "./components/EmptyState";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
  WeatherList
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

      {weatherDataList
        ?
        (
          <WeatherList
            data={weatherDataList}
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
                extraButton={item.extraButton}
              />
            )}
          />
        )
        : <EmptyState />
      }
    </Container>
  );
}