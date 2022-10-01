import React from 'react';
import {styles} from './styles';
import { View,Text,Image } from 'react-native';

export default function Logo({imageUrl,resizeMode}) {

  return (
   <View style={styles.container}>
  <Image style={[styles.logo,{resizeMode}]} source={imageUrl} />
   </View>
  );
}
