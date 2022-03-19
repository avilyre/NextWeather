import React from "react";
import { Alert, Text, ToastAndroid } from "react-native";

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
import { useUser } from "../../../../hooks/useUser";

export function SearchModal({
  onCancel,
  onPressItem
}: SearchModalProps): JSX.Element {
  const { addPlace } = useUser();

  async function getPlaceInformation(city:string) {
    const weather = await getWeather(city);
    const { lat, lon } = weather.data.coord;

    const forecast = await getForecast(lat, lon);

    return {
      weather: weather.data,
      forecast: forecast.data
    };
  }

  function handleCityCard(city:string, country:string) {
    getPlaceInformation(city).then(({ forecast, weather }) => {
      addPlace(
        city,
        country,
        weather.main.temp
      );

      ToastAndroid.show('Adicionado a sua lista!', ToastAndroid.SHORT);
    })
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
                onPress: () => handleCityCard(city, country)
              }}
            />
          );
        }}
      />
    </Container>
  );
}
