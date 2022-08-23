import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LaunchScreen from "./src/screens/LaunchScreen";
import OptionScreen from "./src/screens/OptionScreen";
import IndividualLoginScreen from "./src/screens/IndividualLoginScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OTPScreen from "./src/screens/OTPScreen";
import HospitalLoginScreen from "./src/screens/HospitalLoginScreen";
import DriverLoginScreen from "./src/screens/DriverLoginScreen";
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
          name="Individual Login"
          options={{ title: "login page" }}
          component={IndividualLoginScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ title: "login page" }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Driver Login"
          options={{ title: "Ambulance Driver" }}
          component={DriverLoginScreen}
        />
        <Stack.Screen
          name="Hospital Login"
          options={{ title: "Hospital" }}
          component={HospitalLoginScreen}
        />
        <Stack.Screen
          name="OTP"
          options={{ title: "Verification" }}
          component={OTPScreen}
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
