import React from "react";
import { WeatherCardProps } from "./interface";

import {
  Container,
  Header,
  Place,
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
  country,
  temperature = {}
}: WeatherCardProps): JSX.Element {
  return (
    <Container
      style={{
        elevation: 2,
      }}
      activeOpacity={0.7}
    >
      <Header>
        <Place>
          <Title>{title}</Title>
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
      </Footer>
    </Container>
  )
}
