import { WeatherListDataProps } from "../WeatherList/interface";

export interface WeatherListItemProps extends WeatherListDataProps {
  onPressItem(): void;
}