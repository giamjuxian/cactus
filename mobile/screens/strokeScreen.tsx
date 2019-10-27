import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator
} from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import * as Progress from "react-native-progress";

interface Props extends NavigationInjectedProps {}

interface State {
  isLoading: boolean;
}

class StrokeScreen extends React.PureComponent<Props, State> {
  state: State = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const dangerColorBackground = "#f0b3c040";
    const healthyColorBackground = "#88d87b40";

    const { isLoading } = this.state;

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
          {isLoading ? (
            <>
              <ActivityIndicator
                style={{ marginTop: 250 }}
                size="large"
                color="#000000"
              />
              <Text style={{ marginTop: 10, fontSize: 14 }}>
                Generating your health trajectory ...
              </Text>
            </>
          ) : (
            <>
              <Image
                style={styles.dashboardImage}
                source={require("../assets/save.png")}
              />
              <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Your Score - 0.143</Text>

                <Text style={styles.title}>You are not at risk of Stroke</Text>
              </View>

              <View
                style={{
                  marginTop: 30
                }}
              >
                <Text style={styles.sectionHeader}>Biggest Contributors</Text>
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  { backgroundColor: dangerColorBackground }
                ]}
              >
                <Text style={styles.sectionTitle}>
                  Average Daily Steps - 5574
                </Text>
                <Progress.Bar
                  progress={0.3}
                  width={300}
                  color="red"
                  borderWidth={0}
                />
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  { backgroundColor: healthyColorBackground }
                ]}
              >
                <Text style={styles.sectionTitle}>
                  Average Daily Calorie Intake - 2355
                </Text>
                <Progress.Bar
                  progress={0.2}
                  width={300}
                  color="green"
                  borderWidth={0}
                />
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  { backgroundColor: healthyColorBackground }
                ]}
              >
                <Text style={styles.sectionTitle}>
                  Blood Sodium Level - 146
                </Text>
                <Progress.Bar
                  progress={0.12}
                  width={300}
                  color="green"
                  borderWidth={0}
                />
              </View>

              <View
                style={[
                  styles.sectionContainer,
                  { backgroundColor: healthyColorBackground }
                ]}
              >
                <Text style={styles.sectionTitle}>
                  Blood Calcium Level - 9.5
                </Text>
                <Progress.Bar
                  progress={0.1}
                  width={300}
                  color="green"
                  borderWidth={0}
                />
              </View>
            </>
          )}
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
    color: "green",
    textAlign: "center"
  },
  dashboardImage: {
    marginTop: 50,
    height: 150,
    resizeMode: "contain"
  },

  analyticsImage: {
    height: 300,
    resizeMode: "contain"
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  sectionContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5
  }
});

export default withNavigation(StrokeScreen);
