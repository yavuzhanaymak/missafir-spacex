/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList,Image } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import Details from "../../components/Details"; 
import { queryLaunch } from "../../store/actions/launches";
import Logo from "../../components/Logo";
import convertDate from "../../Utils/convertDate";
function MoreDetails(props) {
  console.log(props);
   return ( 
    <View style={styles.container}>
<View style={styles.imageArea}>
  <Image source={{uri:props.route.params?.data?.links?.patch?.large}} style={styles.image}/>
  </View> 

<View style={styles.textArea}>
  <Text style={styles.textName}>{props.route.params?.data?.name}</Text>
  <Text style={styles.textName}>Flight Number {props.route.params?.data?.flight_number}</Text>
    <Text style={styles.textName}>Launch Date {convertDate(props.route.params?.data?.date_local)}</Text>
  <Text style={styles.textName}>{props.route.params?.data?.details}</Text>

</View>
     </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    queryData: state.launches.queryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQueryLaunch: (fDate, eDate) => dispatch(queryLaunch(fDate, eDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetails);
