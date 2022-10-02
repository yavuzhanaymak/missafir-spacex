import React from "react";
import { styles } from "./styles";
import DatePicker from "react-native-datepicker";
import { View, Text, Dimensions,Image } from "react-native";
import Button from "../Button";
import convertDate from "../../Utils/convertDate";
export default function Details({ imageUrl ="https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png'" ,data , navigation }) {



  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image style={styles.image} source={{uri:imageUrl}} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textName}>
        { data.name}
        </Text>
        <Text style={styles.textFlightNumber}>
       Flight Number { data.flight_number}
        </Text>
        <Text numberOfLines={3} style={styles.textDetail}>
          {data.details}
        </Text>
        <Text style={styles.textDate}>
          {convertDate(data.date_utc)}
        </Text>
      </View>
      <View style={styles.buttonArea}>
<Button text="More"  color="#005288"action={()=>navigation.navigate('moreDetailsScreen',{data})} />
      </View>
    </View>
  );
}
