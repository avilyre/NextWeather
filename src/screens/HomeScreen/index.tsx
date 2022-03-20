import React, { useState } from "react";

import { useUser } from "../../hooks/useUser";
import { ScreensName } from "../../routes/interface";
import { EmptyState } from "./components/EmptyState";
import { WeatherList } from "../../components/WeatherList";

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

  function handleSearchScreen() {
    navigation.navigate(ScreensName.SearchScreen);
  }


  function handleAddedCards() {
    // TODO
    // navigation.navigate(ScreensName.SearchScreen);
  }

  function handleRemovePlace(id: string) {
    removePlace(id);
  }


  return (
    <Container>
      <Header>
        <Title>Cidades</Title>
        <SearchButton onPress={handleSearchScreen}>
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
    </Container>
  );
}