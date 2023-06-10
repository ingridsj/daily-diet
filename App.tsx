import { ActivityIndicator, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_900Black,
  });

  return (
    <ThemeProvider theme={theme}>
      <View>
        {fontsLoaded ? <Text>Hello world!</Text> : <ActivityIndicator />}
      </View>
    </ThemeProvider>
  );
}
