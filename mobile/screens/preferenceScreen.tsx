import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Slider,
  Text,
  TextInput
} from "react-native";
import FullScreenLogo from "../template/FullScreenLogo";
import Button from "../template/Button";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

interface Prop extends NavigationInjectedProps {}

interface State {
  caloriesIntake: number;
  noFastFood: number;
  sportsChoice: string | null;
}

class LoginScreen extends React.PureComponent<Prop, State> {
  state: State = {
    caloriesIntake: 0,
    noFastFood: 0,
    sportsChoice: null
  };

  handleOnPress = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    const { caloriesIntake, noFastFood } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 5 }}>
          <FullScreenLogo />
        </View>

        <View style={{ display: "flex" }}>
          <Text style={styles.label}>
            Average Daily Calorie Intake = {caloriesIntake}
          </Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={5000}
            value={this.state.caloriesIntake}
            onValueChange={val => this.setState({ caloriesIntake: val })}
          />
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.label}>
            Average # fast food meals per week = {noFastFood}
          </Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={10}
            value={this.state.noFastFood}
            onValueChange={val => this.setState({ noFastFood: val })}
          />
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.label}>Sports Choice</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View>
          <Button
            style={{ marginTop: 25 }}
            title="Continue"
            onPress={this.handleOnPress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

export default withNavigation(LoginScreen);
