import {Dimensions, StyleSheet} from 'react-native';
import { responsiveFontSize } from '../../Utils/responsiveFontSize';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    width:Dimensions.get('window').width,
    backgroundColor:'#fff'
  },
 imageArea:
 {
  marginTop:20,
  },
 image:
 {
  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height/4,
  resizeMode:'contain'
 },
 socialArea:
 {
  marginTop:20,
  flexDirection:'row',
  justifyContent:'space-around',
  borderTopWidth:1,
  borderTopColor:'#e2e2e2',
  padding:10

 },
 textName:
  {
    fontSize: responsiveFontSize(18),
    fontWeight: '400',
    color:'#000',
    textAlign:'center',
    marginTop:20,
  },
  textFlightNumber:
  {
    fontSize: responsiveFontSize(12),
    fontWeight: '300',
    color: '#005288',
    textAlign:'center',

  },
  textDate:
  {
    fontSize: responsiveFontSize(12),
    fontWeight: '300',
    color: '#cf2050',
    textAlign:'center',

  },
  textDetails:
  {
    fontSize: responsiveFontSize(14),
    fontWeight: '300',
    color:'#000',
    textAlign:'center',
    marginTop:20,
  },

  textArea:
  {
    padding:10,
  }

});
