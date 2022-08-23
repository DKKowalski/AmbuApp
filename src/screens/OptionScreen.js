import React, { useState } from "react";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import SVGcomponent from "../components/SVGcomponent";
import options from "../../assets/options.svg";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OptionScreen = ({ navigation }) => {
  const [ambulance, setAmbulance] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [hospital, setHospital] = useState(false);

  return (
    <View style={css.container}>
      <View>
        <SVGcomponent Svg={options} />
      </View>
      <View>
        <TouchableOpacity style={[css.buttons, css.shadowProp]}>
          <CheckBox
            uncheckedIcon="circle-o"
            checkedIcon="dot-circle-o"
            checked={hospital}
            onPress={() => {
              setHospital(!hospital);
              setAmbulance(false);
              setIndividual(false);
            }}
          />
          <Text style={css.text}>
            <FontAwesome name="hospital-o" size={24} color="black" /> Hospital
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.buttons, css.shadowProp]}>
          <CheckBox
            uncheckedIcon="circle-o"
            checkedIcon="dot-circle-o"
            checked={individual}
            onPress={() => {
              setIndividual(!individual);
              setAmbulance(false);
              setHospital(false);
            }}
          />
          <Text style={css.text}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
            Individual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[css.buttons, css.shadowProp]}>
          <CheckBox
            uncheckedIcon="circle-o"
            checkedIcon="dot-circle-o"
            checked={ambulance}
            onPress={() => {
              setAmbulance(!ambulance);
              setHospital(false);
              setIndividual(false);
            }}
          />
          <Text style={css.text}>
            <FontAwesome name="ambulance" size={24} color="black" /> Ambulance
            Driver
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={[css.continueBut, css.shadowProp]}
          onPress={() => {
            if (hospital) {
              navigation.navigate("Hospital Login");
            } else if (ambulance) {
              navigation.navigate("Driver Login");
            } else if (individual) {
              navigation.navigate("Individual Login");
            }
          }}
        >
          <Text style={css.text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionScreen;
const css = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", alignItems: "center" },
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
});
