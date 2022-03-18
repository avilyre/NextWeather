import React, { useEffect, useState } from "react";
import { WeatherCardProps } from "../../../../components/WeatherCard/interface";
import { weatherDataList } from "../../../../mocks/weatherDataList";
import { getForecast, getForecastData, getWeather } from "../../services/weatherService";
import { WeatherList } from "../WeatherList";
import { WeatherListDataProps } from "../WeatherList/interface";
import { EmptyState } from "./components/EmptyState";
import { ForecastDetailsModalProps } from "./interface";

import {
  Container,
  Header,
  ButtonIcon,
  Icon,
  Title
} from "./styles";

export function ForecastDetailsModal({
  onCancel
}: ForecastDetailsModalProps): JSX.Element {
  const [city, setCity] = useState("Cortês");
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getForecastData(city)
    .then(res => {
      console.log(res);
      setForecastData(res);
    });
  }, []);

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={onCancel}>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Title>{city}</Title>
      </Header>

      {forecastData.length !== 0
      ? (
        <WeatherList
          data={forecastData}
          onPressItem={() => {}}
        />
      )
      : <EmptyState />}
    </Container>
  );
}
