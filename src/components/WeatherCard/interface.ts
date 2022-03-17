export interface WeatherCardProps {
  title: string;
  country: string;
  temperature?: {
    highlight?: string;
    details?: {
      weather: string;
      min: string;
      max: string;
    }
  }
}
