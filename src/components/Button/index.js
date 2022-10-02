import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({icon, text, action, color = '#779ecb',width='70%'}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor: color,width:width}]}
      onPress={action}>
      
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
