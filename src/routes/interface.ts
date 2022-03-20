export enum ScreensName {
  HomeScreen = "HomeScreen",
  SearchScreen = "SearchScreen",
  ForecastDetails = "ForecastDetailsScreen",
}

export type AppRoutesParams = {
  HomeScreen: {};
  ForecastDetailsScreen: {
    place: string;
  }
  SearchScreen: {};
}
