import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LaunchScreen from "./src/screens/LaunchScreen";
import OptionScreen from "./src/screens/OptionScreen";
import LoginScreen from "./src/screens/LoginScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Launch"
          options={{ title: "" }}
          component={LaunchScreen}
        />
        <Stack.Screen name="choose an option" component={OptionScreen} />
        <Stack.Screen
          name="Login"
          options={{ title: "login page" }}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
