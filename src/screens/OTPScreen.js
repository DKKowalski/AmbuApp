import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import verify from "../../assets/verify.svg";
import SVGcomponent from "../components/SVGcomponent";

const OTPScreen = ({ navigation }) => {
  return (
    <View style={css.container}>
      <View>
        <SVGcomponent Svg={verify} />
      </View>

      <View>
        <Text style={{ fontWeight: "800", alignSelf: "center", fontSize: 32 }}>
          OTP Verification
        </Text>
        <Text>
          Enter the OTP sent to{" "}
          <Text style={{ fontWeight: "800" }}>+233 55 546 8765</Text>
        </Text>
        <TextInput keyboardType="numeric" style={css.textInput} />
        <Text>
          Didn't you receive the OTP?{" "}
          <Text style={{ fontWeight: "800", color: "red" }}>Resend OTP</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[css.continueBut, css.shadowProp]}
          onPress={() => navigation.navigate("Tab")}
        >
          <Text style={css.text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: { width: "100%", height: 10 },
  buttons: {
    flexDirection: "row",
    marginVertical: 5,
    width: 284,
    height: 55,
    backgroundColor: "#FED4D9",
  },
  shadowProp: {
    shadowColor: "blue",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 3,
    shadowRadius: 3,
    elevation: 2,
  },

  text: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "space-evenly",
  },
  continueBut: {
    borderRadius: 12,
    width: 325,
    height: 52,
    backgroundColor: "#F9B7BF",
    marginVertical: 110,
    paddingVertical: 15,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 14,
    padding: 10,
  },
});
