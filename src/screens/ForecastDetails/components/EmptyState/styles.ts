import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  width: 100%;

  padding: 60px 16px;
`;

export const LoadingActivity = styled(ActivityIndicator).attrs({
  size: "large",
  color: theme.colors.primary_light
})``;
