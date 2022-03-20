import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { WeatherListDataProps } from "./interface";

export const Container = styled(
  FlatList as new (
    props: FlatListProps<WeatherListDataProps>
  ) => FlatList<WeatherListDataProps>
)`
  padding: 16px;
`;
