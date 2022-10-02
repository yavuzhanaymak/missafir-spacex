import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import {styles} from './styles';

export default function Input({
  text,
  value,
  onChange,
  password,
  placeholder,
  disable,

}) {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.header}>
       
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <TextInput
        secureTextEntry={password}
        onChangeText={onChange}
        value={value}
        style={styles.inputContainer}
        placeholder={placeholder}
        editable={!disable}
      />
    </View>
  );
}
