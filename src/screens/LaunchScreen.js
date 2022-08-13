import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LaunchScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <Image style={style.img} source={require("../../assets/Ambu.png")} />
      </View>
      <View>
        <Text style={style.headText}>AmbuApp</Text>
      </View>
      <View>
        <Text style={style.subText}>Your health is our priority</Text>
      </View>
      <View>
        <Image style={style.load} source={require("../../assets/Load.png")} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("choose an option");
          }}
        >
          <Text>
            <AntDesign name="arrowright" size={50} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LaunchScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { marginVertical: 10, width: 100, height: 100 },
  headText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 39,
    color: "#EE445B",
  },
  subText: {
    color: "#EE445B",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
  },
  load: { width: 72, height: 36.42, marginVertical: 20 },
});
