import React, { useEffect, useState } from "react";

import { generateId } from "../../utils/generateId";
import { WeatherList } from "../../components/WeatherList";
import { getForecastData } from "../../services/weatherService";
import { EmptyState } from "./components/EmptyState";

import {
  Container,
  Header,
  ButtonIcon,
  Icon,
  Title
} from "./styles";

export function ForecastDetailsScreen({ route, navigation }): JSX.Element {
  const city = route.params.place;
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getForecastData(city)
    .then(res => {
      setForecastData(res.map(item => {
        const updatedItem = {
          ...item,
          id: generateId()
        }

        return updatedItem;
      }));
    });
  }, []);

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={navigation.goBack}>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Title>{city}</Title>
      </Header>

      {forecastData.length !== 0
      ? (
        <WeatherList data={forecastData} />
      )
      : <EmptyState />}
    </Container>
  );
}
