import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { AppLoading } from '@components/AppLoading';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
      {!fontsLoaded ? <AppLoading /> : <NewGroup />}
    </ThemeProvider>
  );
}
