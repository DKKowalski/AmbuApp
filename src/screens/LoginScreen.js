import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import SVGcomponent from "../components/SVGcomponent";
import login from "../../assets/login.svg";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={css.container}>
      <View>
        <SVGcomponent Svg={login} />
      </View>
      <View style={{ marginVertical: 100 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Identity found. Send code to number ending with
          <Text style={{ fontWeight: "800" }}>8765</Text> ?
        </Text>
        <TouchableOpacity
          style={css.buttons}
          onPress={() => navigation.navigate("OTP")}
        >
          <Text style={[css.text, { fontWeight: "800" }]}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
const css = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  orText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#FED5DA",
    alignSelf: "center",
  },
  buttons: {
    width: 325,
    height: 50,

    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 5,
  },
  text: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "space-evenly",
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 14,
    padding: 10,
  },
});
