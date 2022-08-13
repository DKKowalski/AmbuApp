import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <View>
        <Text>Enter your Ghana Card number</Text>
      </View>
      <View>
        <Text>OR</Text>
        <View>
          <TouchableOpacity>
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
const css = StyleSheet.create({});
