import React from 'react';
import {Image, Text, TouchableOpacity , Linking} from 'react-native';
import {styles} from './styles';

export default function SocialButton({icon, type, action,}) {
  const socialIcon = (type) => {
    switch (type) {
      case 'youtube':
        return require(('../../../assets/icons/youtube.png'));
      case 'wikipedia':
        return require('../../../assets/icons/wikipedia.png');
      case 'flickr':
        return require('../../../assets/icons/flickr.png');
        case 'reddit':
          return require('../../../assets/icons/reddit.png');
          case 'nasa':
            return require('../../../assets/icons/nasa.png');
            
      default:
        return null;
    }
  }
  return (
    <TouchableOpacity
      style={[styles.buttonStyle]}
      onPress={action}>
   <Image style={styles.icon} source={socialIcon(type)} />   
    </TouchableOpacity>
  );
}
