/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import DateInput from "../../components/DateInput";
import { queryLaunch } from "../../store/actions/launches";

function HomeScreen(props) {
 
  console.log(props);
  return (
    <View style={styles.container}>
    <Text>
      Details
    </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
