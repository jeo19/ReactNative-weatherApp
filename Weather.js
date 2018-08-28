import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
const weatherCases = {
  Rain: {
    color: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info outside",
    icon: "weather-rainy"
  },
  Clear: {
    color: ["#fee140", "#fa709a"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    color: ["#84fab0", "#8fd3f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    color: ["#BDBBBE", "#9D9EA3"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
    icon: "weather-cloudy"
  },
  Snow: {
    color: ["#d9afd9", "#97d9e1"],
    title: "Cold as balls",
    subtitle: "Do you want to build snowman? fuck no",
    icon: "weather-snowy"
  },
  Drizzle: {
    color: ["#74ebd5", "#9face6"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay ♨",
    icon: "weather-hail"
  },
  Haze: {
    color: ["#74ebd5", "#9face6"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay ♨",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].color}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
Weather.prototype = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};
export default Weather;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
