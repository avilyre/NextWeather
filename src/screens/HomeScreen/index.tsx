import React, { useState } from "react";
import { Modal } from "react-native";

import { useUser } from "../../hooks/useUser";
import { ScreensName } from "../../routes/interface";
import { EmptyState } from "./components/EmptyState";
import { SearchModal } from "./components/SearchModal";
import { WeatherList } from "./components/WeatherList";

import {
  Container,
  Header,
  Title,
  SearchButton,
  Icon,
} from "./styles";

export function HomeScreen({ navigation }): JSX.Element {
  const [isEnabledSearchPlace, setIsEnabledSearchPlace] = useState(false);
  const { places, removePlace } = useUser();

  function handleToggleSearchModal() {
    setIsEnabledSearchPlace(!isEnabledSearchPlace);
  }


  function handleAddedCards() {
    // TODO
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
          onPressItem={() => {
            navigation.navigate(ScreensName.ForecastDetails, {
              place: "new york"
            });
          }}
        />
      </Modal>
    </Container>
  );
}