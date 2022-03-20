import React from "react";
import { WeatherCard } from "../WeatherCard";

import { WeatherListItemProps } from "./interface";

export function WeatherListItem({
  title,
  subtitle,
  highlight,
  temperature,
  extraButton,
  onPressItem
}: WeatherListItemProps): JSX.Element {
  return (
    <WeatherCard
      title={title}
      subtitle={subtitle}
      highlight={highlight}
      temperature={{
        details: {
          weather: temperature?.details.weather,
          min: temperature?.details.min,
          max: temperature?.details.max
        }
      }}
      onPress={onPressItem}
      extraButton={extraButton}
    />
  );
}
