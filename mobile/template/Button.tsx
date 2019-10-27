import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle
} from "react-native";

interface Props {
  title: string;
  onPress: () => unknown;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  innerStyle?: StyleProp<ViewStyle>;
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { title, onPress, style, buttonStyle } = this.props;
    return (
      <View style={style}>
        <TouchableOpacity
          style={[styles.buttonStyle, buttonStyle]}
          onPress={onPress}
        >
          <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.4
  },
  text: {
    flexShrink: 1,
    flexGrow: 1,
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 16
  },
  buttonStyle: {
    padding: 15,
    backgroundColor: "#0DC3D7",
    borderRadius: 15
  }
});
