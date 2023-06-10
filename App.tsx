import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Hello world!</Text>
      </View>
    </ThemeProvider>
  );
}
