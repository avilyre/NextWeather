import React, { useEffect, useState } from "react";
import { WeatherCardProps } from "../../components/WeatherCard/interface";
import { weatherDataList } from "../../mocks/weatherDataList";
import { EmptyState } from "./components/EmptyState";
import { WeatherList } from "./components/WeatherList";
import { WeatherListDataProps } from "./components/WeatherList/interface";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
} from "./styles";

export function HomeScreen(): JSX.Element {
  const [weatherData, setWeatherData] = useState<WeatherListDataProps[]>();

  function handleWeatherCard() {
    console.log("Puft!!");
  }

  useEffect(() => {
    setTimeout(() => {
      setWeatherData(weatherDataList);
    }, 2000);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Cidades</Title>
        <SearchButton>
          <Icon name="search" />
        </SearchButton>
      </Header>

      {weatherData
        ?
        (
          <WeatherList
            data={weatherData}
            onPressItem={handleWeatherCard}
          />
        )
        : <EmptyState />
      }
    </Container>
  );
}