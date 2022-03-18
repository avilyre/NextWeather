import React from "react";
import { Button } from "./components/Button";
import { WeatherCardProps } from "./interface";

import {
  Container,
  Header,
  HeaderInfo,
  Title,
  Subtitle,
  Temperature,
  Footer,
  Details,
  Weather,
  MinMax
} from "./styles";

export function WeatherCard({
  title,
  subtitle,
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
        <HeaderInfo>
          <Title>{title}</Title>
          <Subtitle>{subtitle && subtitle}</Subtitle>
        </HeaderInfo>
        {temperature.highlight && (
          <Temperature>{temperature.highlight}</Temperature>
        )}
      </Header>
      <Footer>
        {temperature.details && (
          <Details>
            <Weather>{temperature.details.weather}</Weather>
            <MinMax>
              {temperature.details.min && temperature.details.max && `${temperature.details.min} - ${temperature.details.max}`}
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
