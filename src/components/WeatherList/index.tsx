import React from "react";
import { GestureResponderEvent } from "react-native";
import { WeatherListItem } from "../WeatherListItem";
import { WeatherListProps } from "./interface";

import { Container } from "./styles";

export function WeatherList({ data }: WeatherListProps): JSX.Element {
  return (
    <Container
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
          <WeatherListItem {...item} />
        )
      }
    />
  );
}
