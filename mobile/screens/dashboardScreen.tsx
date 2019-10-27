import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";

interface Props extends NavigationInjectedProps {}

interface State {
  isLoading: boolean;
}

class DashboardScreen extends React.PureComponent<Props> {
  state: State = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }
  handleClickDiabetes = () => {
    this.props.navigation.navigate("Diabetes");
  };

  handleClickStroke = () => {
    this.props.navigation.navigate("Stroke");
  };

  handleClickHeartAttack = () => {
    this.props.navigation.navigate("Diabetes");
  };

  render() {
    const dangerColorBackground = "#f0b3c040";
    const healthyColorBackground = "#88d87b40";

    const { isLoading } = this.state;

    return (
      <ScrollView style={styles.container}>
        {isLoading ? (
          <>
            <ActivityIndicator
              style={{ marginTop: 250 }}
              size="large"
              color="#000000"
            />
            <Text style={{ marginTop: 10, fontSize: 14, textAlign: "center" }}>
              Retrieving your health data...
            </Text>
          </>
        ) : (
          <View style={styles.dashboardImageContainer}>
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
              source={require("../assets/dashboardPage__logo.png")}
            />

            <Text style={styles.title}>You have one cause of concern</Text>

            <View
              style={{
                marginTop: 30
              }}
            >
              <Text style={styles.sectionHeader}>Risks</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.sectionContainer,
                { backgroundColor: dangerColorBackground }
              ]}
              onPress={this.handleClickDiabetes}
            >
              <Text style={styles.sectionTitle}>Diabetes - 50%</Text>
              <Progress.Bar
                progress={0.5}
                width={300}
                color="red"
                borderWidth={0}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sectionContainer,
                { backgroundColor: healthyColorBackground }
              ]}
              onPress={this.handleClickStroke}
            >
              <Text style={styles.sectionTitle}>Stroke - 19%</Text>
              <Progress.Bar
                progress={0.19}
                width={300}
                color="green"
                borderWidth={0}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sectionContainer,
                { backgroundColor: healthyColorBackground }
              ]}
              onPress={this.handleClickHeartAttack}
            >
              <Text style={styles.sectionTitle}>Heart Attack - 12%</Text>
              <Progress.Bar
                progress={0.12}
                width={300}
                color="green"
                borderWidth={0}
              />
            </TouchableOpacity>

            <View
              style={{
                marginTop: 30
              }}
            >
              <Text style={styles.sectionHeader}>Goals</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={[
                  styles.sectionContainer,
                  {
                    backgroundColor: dangerColorBackground,
                    alignItems: "center",
                    marginHorizontal: 10
                  }
                ]}
              >
                <Text style={styles.sectionTitleSmall}>Sept</Text>
                <Text style={styles.sectionTitle}>50%</Text>
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  {
                    backgroundColor: healthyColorBackground,
                    alignItems: "center",
                    marginHorizontal: 10
                  }
                ]}
              >
                <Text style={styles.sectionTitleSmall}>Oct</Text>
                <Text style={styles.sectionTitle}>79%</Text>
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  {
                    backgroundColor: healthyColorBackground,
                    alignItems: "center",
                    marginHorizontal: 10
                  }
                ]}
              >
                <Text style={styles.sectionTitleSmall}>Nov</Text>
                <Text style={styles.sectionTitle}>90%</Text>
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  {
                    backgroundColor: dangerColorBackground,
                    alignItems: "center",
                    marginHorizontal: 10
                  }
                ]}
              >
                <Text style={styles.sectionTitleSmall}>Dec</Text>
                <Text style={styles.sectionTitle}>43%</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 30
              }}
            >
              <Text style={styles.sectionHeader}>Synced Device</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  backgroundColor: healthyColorBackground,
                  marginTop: 10,
                  padding: 8,
                  borderRadius: 40,
                  alignItems: "center"
                }}
              >
                <Image
                  style={{
                    height: 30,

                    resizeMode: "contain"
                  }}
                  source={require("../assets/watch.png")}
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20
  },
  panelContainer: {
    flex: 1,
    height: 10,
    marginHorizontal: 16
  },
  label: {
    fontWeight: "500",
    marginBottom: 5
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    backgroundColor: "#0DC3D726",
    borderRadius: 15,
    textAlign: "center"
  },
  dashboardImageContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center"
  },
  dashboardImage: {
    height: 250,
    resizeMode: "contain"
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5
  },
  modal: {
    height: 50
  },
  title: {
    fontSize: 30,
    color: "red",
    textAlign: "center"
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  sectionTitleSmall: {
    fontWeight: "bold"
  }
});

export default withNavigation(DashboardScreen);
