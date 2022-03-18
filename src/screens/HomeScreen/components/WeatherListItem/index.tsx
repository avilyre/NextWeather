import React from "react";

import { WeatherCard } from "../../../../components/WeatherCard";
import { WeatherListItemProps } from "./interface";

export function WeatherListItem({
  title,
  subtitle,
  temperature,
  extraButton,
  onPressItem
}: WeatherListItemProps): JSX.Element {
  return (
    <WeatherCard
      title={title}
      subtitle={subtitle}
      temperature={{
        highlight: temperature?.highlight,
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
