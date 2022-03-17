import styled from "styled-components/native";
import { Feather,  } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import { WeatherCardProps } from "../../components/WeatherCard/interface";

export const Container = styled.View`
  flex: 1;

  width: 100%;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const SearchButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const WeatherCards = styled(
  FlatList as new (
    props: FlatListProps<WeatherCardProps>
  ) => FlatList<WeatherCardProps>
)`
  padding: 16px;
`;
