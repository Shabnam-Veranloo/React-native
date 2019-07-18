import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import {styles} from '../../styles'

export var Button = ({ onPress, children, style, txtStyle }) => {
  var { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle,txtStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

