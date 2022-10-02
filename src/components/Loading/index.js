import React from 'react';
import {Image, Text, View} from 'react-native';

export default function Loading({icon, text, action, color = '#779ecb',width='70%'}) {
  return (
<View style={{}}>
<Image style={{resizeMode:'contain',height:30}} source={require('../../../assets/loading.gif')} />

</View>  );
}
