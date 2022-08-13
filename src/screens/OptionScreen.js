import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import SVGcomponent from "../components/SVGcomponent";
import options from "../../assets/options.svg";
const OptionScreen = () => {
  return (
    <View style={css.container}>
      <View>
        <SVGcomponent Svg={options} />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Individual</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Ambulance Driver</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionScreen;
const css = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", alignItems: "center" },
  img: { width: "100%", height: 10 },
});
