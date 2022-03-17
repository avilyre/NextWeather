import React from "react";
import { Button } from "./components/Button";
import { WeatherCardProps } from "./interface";

import {
  Container,
  Header,
  Place,
  City,
  Subtitle,
  Temperature,
  Footer,
  Details,
  Weather,
  MinMax
} from "./styles";

export function WeatherCard({
  city,
  country,
  temperature = {},
  extraButton,
  onPress,
  ...rest
}: WeatherCardProps): JSX.Element {
  return (
    <Container
    style={{
      elevation: 2,
    }}
    activeOpacity={0.7}
    onPress={onPress}
    {...rest}
    >
      <Header>
        <Place>
          <City>{city}</City>
          <Subtitle>{country}</Subtitle>
        </Place>
        {temperature.highlight && (
          <Temperature>{temperature.highlight}</Temperature>
        )}
      </Header>
      <Footer>
        {temperature.details && (
          <Details>
            <Weather>{temperature.details.weather}</Weather>
            <MinMax>
              {`${temperature.details.min} - ${temperature.details.max}`}
            </MinMax>
          </Details>
        )}
        {extraButton && (
          <Button
            title={extraButton.title}
            onPress={extraButton.onPress}
          />
        )}
      </Footer>
    </Container>
  )
}
