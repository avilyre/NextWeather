import React from "react";

import {
  Container,
  Header,
  ButtonIcon,
  Icon,
  Input
} from "./styles";

export function SearchModal(): JSX.Element {
  return (
    <Container>
      <Header>
        <ButtonIcon>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Input placeholder="Procurar local" />
      </Header>
    </Container>
  );
}
