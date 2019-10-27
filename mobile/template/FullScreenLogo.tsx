import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class FullScreenLogo extends React.PureComponent {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 72, height: 110 }}
          source={require("../assets/loginPage__logo.png")}
        />
        <Text style={styles.logoName}>cactus</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 100,
    paddingBottom: 50,
    alignItems: "center"
  },
  logoName: {
    color: "#0137D4",
    fontSize: 50,
    fontWeight: "700"
  }
});
