/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import DateInput from "../../components/DateInput";
import { queryLaunch } from "../../store/actions/launches";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";
import convertDatetoISO from "../../Utils/convertDateToISO";
function HomeScreen(props) {
  const [fDate, setfDate] = useState("");
  const [eDate, seteDate] = useState("");

  function getFirstDate(date) {
    setfDate(convertDatetoISO(date));
  }

  function getEndDate(date) {
    seteDate(convertDatetoISO(date));
  }

  const getQueryHandler = async () => {
    const response = await props.onQueryLaunch(fDate, eDate);
    props.navigation.navigate("DetailScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Logo
          imageUrl={require("../../../assets/spacex.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.Area}>
        <View style={styles.dateArea}>
          <DateInput
            placeholder={"First Date"}
            getDate={getFirstDate}
            text="First Date"
            date={fDate}
          />
          <DateInput
            placeholder={"End Date"}
            getDate={getEndDate}
            text="End Date"
            date={eDate}
          />
        </View>
        <View style={styles.inputArea}>
          <Input text={"Name"} placeholder={"Name"} />
        </View>
        <View style={styles.buttonArea}>
          <Button
            action={() => getQueryHandler()}
            color="#005288"
            text={"Search"}
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQueryLaunch: (fDate, eDate) => dispatch(queryLaunch(fDate, eDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
