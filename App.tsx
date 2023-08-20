import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true}/>
      <Groups />
    </ThemeProvider>
  );
}
