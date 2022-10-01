import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    width:Dimensions.get('window').width,
  },
 imageArea:
 {
  flex:1
 },
 image:
 {
  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height/4,
  resizeMode:'contain'
 }
});
