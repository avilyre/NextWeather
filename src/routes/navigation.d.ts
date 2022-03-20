import { RootStackParamList } from './app.routess';
import { AppRoutesParams } from './interface';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesParams {}
  }
}