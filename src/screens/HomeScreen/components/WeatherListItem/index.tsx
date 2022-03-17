import React from "react";

import { WeatherCard } from "../../../../components/WeatherCard";
import { WeatherListDataProps, WeatherListProps } from "../WeatherList/interface";
import { WeatherListItemProps } from "./interface";

export function WeatherListItem({
  city,
  country,
  temperature,
  extraButton,
  onPressItem
}: WeatherListItemProps): JSX.Element {
  return (
    <WeatherCard
      city={city}
      country={country}
      temperature={{
        highlight: temperature.highlight,
        details: {
          weather: temperature.details.weather,
          min: temperature.details.min,
          max: temperature.details.max
        }
      }}
      onPress={onPressItem}
      extraButton={extraButton}
    />
  );
}
