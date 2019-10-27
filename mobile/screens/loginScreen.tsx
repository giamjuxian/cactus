import * as React from "react";
import { View, StyleSheet, SafeAreaView, TextInput, Text } from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import Button from "../template/Button";
import FullScreenLogo from "../template/FullScreenLogo";

interface Props extends NavigationInjectedProps {}

class LoginScreen extends React.PureComponent<Props> {
  handleOnPress = () => {
    this.props.navigation.navigate("Preference");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 5 }}>
          <FullScreenLogo />
          <View style={{ marginTop: 75 }}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.textInput} />
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.textInput} />
          </View>

          <Button
            style={{ marginTop: 25 }}
            title="Login"
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
