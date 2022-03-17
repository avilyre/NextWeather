import React from "react";
import { WeatherList } from "../WeatherList";
import { EmptyState } from "./EmptyState";
import { SearchModalProps } from "./interface";

import {
  Container,
  Header,
  ButtonIcon,
  Icon,
  Input
} from "./styles";

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
        <Input autoCorrect placeholder="Procurar local" />
      </Header>

      {dataList
      ? (
        <WeatherList
          data={dataList}
          onPressItem={onPressItem}
        />
      ) : (
        <EmptyState />
      )}
    </Container>
  );
}
