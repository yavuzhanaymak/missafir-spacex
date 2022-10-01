import React from "react";
import { styles } from "./styles";
import DatePicker from "react-native-datepicker";
import { View, Text, Dimensions,Image } from "react-native";
import Button from "../Button";
import convertDate from "../../Utils/convertDate";
export default function Details({ imageUrl ="https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png'" ,data , navigation }) {

console.log(navigation)
const isotoLocalDate = (date) => {
 const convertDate = new Date(date).toLocaleString('en-US', { 'dd/MM/yyyy': 'numeric' });

  return convertDate;
};

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image style={styles.image} source={{uri:imageUrl}} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textName}>
        { data.name}
        </Text>
        <Text numberOfLines={2} style={styles.textDetail}>
          {data.details}
        </Text>
        <Text style={styles.textDate}>
          {convertDate(data.date_utc)}
        </Text>
      </View>
      <View style={styles.buttonArea}>
<Button text="More" action={()=>navigation.navigate('moreDetailsScreen',{data})} />
      </View>
    </View>
  );
}
