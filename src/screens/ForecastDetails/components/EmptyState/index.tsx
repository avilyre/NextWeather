import React from "react";

import { Container, LoadingActivity } from "./styles";

export function EmptyState(): JSX.Element {
  return (
    <Container>
      <LoadingActivity />
    </Container>
  );
}