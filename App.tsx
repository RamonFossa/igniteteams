import { Groups } from '@screens/Groups';
import { Teams } from '@screens/Teams';
import { NewGroup } from '@screens/NewGroup';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { AppLoading } from '@components/AppLoading';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
const material_community_font = require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf');

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, material_community_font });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
      {!fontsLoaded ? <AppLoading /> : <Teams />}
    </ThemeProvider>
  );
}
