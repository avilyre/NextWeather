import React from "react";
import { Text } from "react-native";

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

import config from "../../../../config/index.json";
import { WeatherCard } from "../../../../components/WeatherCard";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../../global/styles/theme";

export function SearchModal({
  dataList,
  onCancel,
  onPressItem
}: SearchModalProps): JSX.Element {
  return (
    <Container>
      <Header>
        <ButtonIcon onPress={onCancel}>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Title>Procurar</Title>
      </Header>
      <Input
        placeholder='Procurar local'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data);
        }}
        query={{
          key: config.googleApi,
          language: 'pt-br',
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
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
        onFail={(result) => {
          console.log(result)
        }}
        renderRow={(data: GooglePlaceData) => {
          console.log(JSON.stringify(data.structured_formatting.secondary_text));

          const city = data.structured_formatting.main_text;
          const country = data.structured_formatting.secondary_text;

          return (
            <WeatherCard
              city={city}
              country={country}
            />
          );
        }}
      />
    </Container>
  );
}
