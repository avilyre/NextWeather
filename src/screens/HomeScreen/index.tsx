import React, { useState } from "react";
import { Modal } from "react-native";
import { weatherDataList } from "../../mocks/weatherDataList";
import { EmptyState } from "./components/EmptyState";
import { ForecastDetailsModal } from "./components/ForecastDetailsModal";
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
  const [weatherData, setWeatherData] = useState<WeatherListDataProps[]>(weatherDataList);
  const [isEnabledSearchPlace, setIsEnabledSearchPlace] = useState(false);
  const [isEnabledForecastDetailsModal, setIsEnabledForecastDetailsModal] = useState(false);

  function handleToggleSearchModal() {
    setIsEnabledSearchPlace(!isEnabledSearchPlace);
  }

  function handleToggleForecastDetailsModal() {
    setIsEnabledForecastDetailsModal(!isEnabledForecastDetailsModal);
  }

  function handleAddedCards() {
    handleToggleForecastDetailsModal();
  }


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
            data={weatherDataList}
            onPressItem={handleAddedCards}
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
          onPressItem={handleToggleForecastDetailsModal}
        />
      </Modal>

      <Modal
        visible={isEnabledForecastDetailsModal}
        onRequestClose={handleToggleForecastDetailsModal}
        animationType="slide"
      >
        <ForecastDetailsModal
          onCancel={handleToggleForecastDetailsModal}
        />
      </Modal>
    </Container>
  );
}