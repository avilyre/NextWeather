import { WeatherCardProps } from "../components/WeatherCard/interface";

export interface Place extends WeatherCardProps {
  id: string;
}

export interface UserContextProps {
  places: Place[];
  addPlace(city: string, subtitle: string, highlight: string): void;
  removePlace(id: string): void
}

