import * as React from "react";
import { StyleSheet } from "react-native";
import {
  createAppContainer,
  NavigationContainerComponent
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/loginScreen";
import PreferenceScreen from "./screens/preferenceScreen";
import DashboardScreen from "./screens/dashboardScreen";
import DiabetesScreen from "./screens/diabetesScreen";

export default class App extends React.PureComponent {
  appContainer = React.createRef<NavigationContainerComponent>();

  handleNavigationChange = () => {
    console.log("Hello World");
  };

  render() {
    return (
      <AppContainer
        ref={this.appContainer}
        onNavigationStateChange={this.handleNavigationChange}
        uriPrefix="/app"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Preference: PreferenceScreen,
    Dashboard: DashboardScreen,
    Diabetes: DiabetesScreen
  },
  {
    initialRouteName: "Diabetes"
  }
);

const AppContainer = createAppContainer(RootStack);
