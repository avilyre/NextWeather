import React, { useEffect, useState } from "react";
import { ScreensName } from "../../routes/interface";

import { generateId } from "../../utils/generateId";
import { WeatherList } from "../HomeScreen/components/WeatherList";
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
  const [city, setCity] = useState(route.params.place);
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
        <ButtonIcon onPress={() => {
          // the goBack() function was not used due to some reason causing freezing on the screen
          navigation.navigate(ScreensName.HomeScreen);
        }}>
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
