import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ScreensName } from "../../routes/interface";
import { WeatherCard } from "../WeatherCard";

import { WeatherListItemProps } from "./interface";

export function WeatherListItem({
  title,
  subtitle,
  highlight,
  temperature,
  extraButton,
}: WeatherListItemProps): JSX.Element {
  const navigation = useNavigation();

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
      onPress={() => navigation.navigate(ScreensName.ForecastDetails, {
        place: title
      })}
      extraButton={extraButton}
    />
  );
}
