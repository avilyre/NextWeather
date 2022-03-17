import { WeatherListDataProps } from "../WeatherList/interface";

export interface SearchModalProps {
  dataList: WeatherListDataProps[];
  onCancel(): void;
  onPressItem(): void;
}