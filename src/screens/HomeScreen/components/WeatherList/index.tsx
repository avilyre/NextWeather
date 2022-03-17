import React from "react";
import { WeatherCard } from "../../../../components/WeatherCard";
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
        <WeatherCard
          city={item.city}
          country={item.country}
          temperature={{
            highlight: item.temperature.highlight,
            details: {
              weather: item.temperature.details.weather,
              min: item.temperature.details.min,
              max: item.temperature.details.max
            }
          }}
          onPress={onPressItem}
          extraButton={item.extraButton}
        />
      )}
    />
  );
}
