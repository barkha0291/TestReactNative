import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { textColorValue, backgroundColorValue, titleText, onPress, buttonStyleFromProps, buttonTextStyle } = props;

  return (
    <TouchableOpacity disabled={props.disabled || false} onPress={onPress}>
      <View
        backgroundColor={props.disabled ? (props.disabledColor || '#9a9a9a') : (backgroundColorValue)}
        style={[buttonStyle, buttonStyleFromProps]}
      >
        <Text style={[styles.textStyle, { color: textColorValue }, buttonTextStyle]}>{titleText}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  }
};

export { Button };
