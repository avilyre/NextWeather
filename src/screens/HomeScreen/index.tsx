import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import { WeatherCardProps } from "../../components/WeatherCard/interface";
import { weatherDataList } from "../../mocks/weatherDataList";
import { EmptyState } from "./components/EmptyState";
import { SearchModal } from "./components/SearchModal";
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
  const [isEnabledSearchPlace, setIsEnabledSearchPlace] = useState(false);

  function handleWeatherCard() {
    console.log("Puft!!");
  }

  function handleToggleSearchModal() {
    setIsEnabledSearchPlace(!isEnabledSearchPlace);
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
        <SearchButton onPress={handleToggleSearchModal}>
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

      <Modal
        visible={isEnabledSearchPlace}
        onRequestClose={handleToggleSearchModal}
        animationType="slide"
      >
        <SearchModal
          dataList={weatherData}
          onCancel={handleToggleSearchModal}
          onPressItem={handleWeatherCard}
        />
      </Modal>
    </Container>
  );
}