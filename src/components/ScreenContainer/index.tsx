import React from "react";
import { Container } from "./styles";

export function ScreenContainer({ children }): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  )
}