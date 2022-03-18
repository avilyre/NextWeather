import { TouchableOpacityProps } from "react-native";

export interface WeatherCardProps extends TouchableOpacityProps {
  title: string;
  subtitle?: string;
  temperature?: {
    highlight?: string;
    details?: {
      weather: string;
      min: string;
      max: string;
    }
  }
  extraButton?: {
    title: string;
    onPress(): void;
  }
}
