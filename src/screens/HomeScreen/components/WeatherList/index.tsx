import React from "react";
import { WeatherCard } from "../../../../components/WeatherCard";
import { WeatherListItem } from "../WeatherListItem";
import { WeatherListProps } from "./interface";

import { Container } from "./styles";

export function WeatherList({
  data,
  onPressItem
}: WeatherListProps): JSX.Element {
  return (
    <Container
      data={data}
      renderItem={({ item }) => (
          <WeatherListItem {...item} onPressItem={onPressItem} />
        )
      }
    />
  );
}
