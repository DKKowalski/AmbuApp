import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import SVGcomponent from "../components/SVGcomponent";
import login from "../../assets/login.svg";

const DriverLoginScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={css.container}>
      <View>
        <SVGcomponent Svg={login} />
      </View>
      <View style={{ marginVertical: 100, justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Enter your Driver License
        </Text>
        <TextInput style={css.textInput} />

        <TouchableOpacity
          style={[css.continueBut, css.shadowProp]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={css.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverLoginScreen;
const css = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "800",
    fontSize: 24,
    justifyContent: "space-evenly",
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 14,
    padding: 10,
  },
  shadowProp: {
    shadowColor: "blue",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 3,
    shadowRadius: 3,
    elevation: 2,
  },
  continueBut: {
    borderRadius: 12,
    width: 325,
    height: 52,
    backgroundColor: "#F9B7BF",
  },
});
