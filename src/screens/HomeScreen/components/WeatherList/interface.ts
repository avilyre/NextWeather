import { TouchableOpacityProps } from "react-native";
import { WeatherCardProps } from "../../../../components/WeatherCard/interface";

export interface WeatherListDataProps extends WeatherCardProps {
  id: string
}

export interface WeatherListProps {
  data: WeatherListDataProps[]
  onPressItem(): void;
}
