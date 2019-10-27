import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

interface Props extends NavigationInjectedProps {}

class DiabetesScreen extends React.PureComponent<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <View style={{ alignItems: "center", marginHorizontal: 30 }}>
              <Text style={{ fontWeight: "bold" }}>Weight</Text>
              <Text>68 KG</Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 30 }}>
              <Text style={{ fontWeight: "bold" }}>Height</Text>
              <Text>172 CM</Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 30 }}>
              <Text style={{ fontWeight: "bold" }}>Blood</Text>
              <Text>120 BPM</Text>
            </View>
          </View>

          <Image
            style={styles.dashboardImage}
            source={require("../assets/risky.png")}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>You are at risk of Diabetes</Text>
          </View>

          <View
            style={{
              marginTop: 30
            }}
          >
            <Text style={styles.sectionHeader}>What is causing it</Text>
          </View>
          <Image
            style={styles.analyticsImage}
            source={require("../assets/bargraph.jpg")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 30
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    color: "red",
    textAlign: "center"
  },
  dashboardImage: {
    marginTop: 50,
    height: 150,
    resizeMode: "contain"
  },

  analyticsImage: {
    height: 200,
    resizeMode: "contain"
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default withNavigation(DiabetesScreen);
