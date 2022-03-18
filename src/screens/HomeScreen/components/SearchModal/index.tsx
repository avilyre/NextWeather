import React from "react";
import { Alert, Text } from "react-native";

import { DescriptionRow, GooglePlaceData } from "react-native-google-places-autocomplete";

import { WeatherList } from "../WeatherList";
import { EmptyState } from "./components/EmptyState";
import { SearchModalProps } from "./interface";

import {
  Container,
  Header,
  ButtonIcon,
  Icon,
  Input,
  Title
} from "./styles";

import apiKeys from "../../../../config/apiKeys";
import { WeatherCard } from "../../../../components/WeatherCard";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../../global/styles/theme";
import { getForecast, getWeather } from "../../services/weatherService";

export function SearchModal({
  dataList,
  onCancel,
  onPressItem
}: SearchModalProps): JSX.Element {

  async function handleCityCard(city:string) {
    const weather = await getWeather(city);
    const { lat, lon } = weather.data.coord;

    const forecast = await getForecast(lat, lon);
    console.log(JSON.stringify(forecast.data));
  }

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={onCancel}>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Title>Procurar</Title>
      </Header>
      <Input
        fetchDetails={true}
        placeholder='Procurar local'
        query={{
          key: apiKeys.googleApi,
          language: 'pt-br',
        }}
        
        enablePoweredByContainer={false}
        styles={{
          textInputContainer: {
            height: RFValue(50),
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 15,
            paddingBottom: 15
          },
          textInput: {
            height: "100%",
            color: '#5d5d5d',
            fontSize: RFValue(16),
          },
          separator: {
            display: "none",
          },
          row: {
            padding: 0,
          }
        }}
        renderRow={(data: GooglePlaceData) => {
          const city = data.structured_formatting.main_text;
          const country = data.structured_formatting.secondary_text;

          return (
            <WeatherCard
              title={city}
              subtitle={country}
              onPress={onPressItem}
              extraButton={{
                title: "ADICIONAR",
                onPress: () => {}
              }}
            />
          );
        }}
      />
    </Container>
  );
}
