import React from 'react';
import {styles} from './styles';
import DatePicker from 'react-native-datepicker'
import { View,Text,Dimensions } from 'react-native';

export default function DateInput({getDate, date,text,placeholder}) {

  return (
   <View style={styles.container}>
    <Text>
      {text}
    </Text>
     <DatePicker
    style={{width: Dimensions.get('window').width/2.2 }}
    mode="date"
    date={date}
    placeholder={placeholder}
    format="YYYY-MM-DD"
    minDate="1900-01-01"
    maxDate="2099-01-01"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
      },
      dateInput: {
        marginLeft: 36
      }
   
    }}
    onDateChange={(date) => {getDate(date)}}
  />
   </View>
  );
}
