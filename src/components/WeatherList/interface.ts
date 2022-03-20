import { WeatherCardProps } from "../WeatherCard/interface";

export interface WeatherListDataProps extends WeatherCardProps {
  id: string
}

export interface WeatherListProps {
  data: WeatherListDataProps[]
  onPressItem(): void;
}