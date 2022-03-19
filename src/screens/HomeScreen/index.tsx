import React, { useState } from "react";
import { Modal } from "react-native";
import { useUser } from "../../hooks/useUser";
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
  const [isEnabledSearchPlace, setIsEnabledSearchPlace] = useState(false);
  const [isEnabledForecastDetailsModal, setIsEnabledForecastDetailsModal] = useState(false);
  const { places, removePlace } = useUser();

  function handleToggleSearchModal() {
    setIsEnabledSearchPlace(!isEnabledSearchPlace);
  }

  function handleToggleForecastDetailsModal() {
    setIsEnabledForecastDetailsModal(!isEnabledForecastDetailsModal);
  }

  function handleAddedCards() {
    handleToggleForecastDetailsModal();
  }

  function handleRemovePlace(id: string) {
    removePlace(id);
  }


  return (
    <Container>
      <Header>
        <Title>Cidades</Title>
        <SearchButton onPress={handleToggleSearchModal}>
          <Icon name="search" />
        </SearchButton>
      </Header>

      {places.length !== 0
        ?
        (
          <WeatherList
            data={places.map((item) => {
              const updatedItem = {
                ...item,
                extraButton: {
                  title: "Remover",
                  onPress: () => {
                    handleRemovePlace(item.id);
                  }
                }
              }

              return updatedItem;
            })}
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