import { GestureResponderEvent, TouchableOpacityProps } from "react-native";

export interface WeatherCardProps extends TouchableOpacityProps {
  title: string;
  subtitle: string;
  highlight?: string;
  extraButton?: {
    title: string;
    onPress(): void;
  }
  temperature?: {
    details?: {
      weather: string;
      min: string;
      max: string;
    }
  }
}
