/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import DateInput from "../../components/DateInput";
import { queryLaunch, queryLaunchWithName } from "../../store/actions/launches";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";
import convertDatetoISO from "../../Utils/convertDateToISO";
import Loading from "../../components/Loading";
function HomeScreen(props) {
  const [fDate, setfDate] = useState("2018.10.02");
  const [eDate, seteDate] = useState('2022.10.02');
  const [name, setName] = useState("");

  function getFirstDate(date) {
    setfDate(convertDatetoISO(date));
  }

  function getEndDate(date) {
    seteDate(convertDatetoISO(date));
  }

  const getQueryHandler = async () => {
    try {
      const response =
        name === ""
          ? await props.onQueryLaunch(fDate, eDate)
          : await props.onQueryLaunchwithName(fDate, eDate, name);
      props.navigation.navigate("DetailScreen");
    } catch (error) {
      alert("Something went wrong");
    }
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
          <Input
            onChange={(e) => setName(e)}
            text={"Name"}
            placeholder={"Name"}
          />
        </View>
        <View style={styles.buttonArea}>
          <Button
            action={() => getQueryHandler()}
            color="#005288"
            text={"Search"}
            width={Dimensions.get("window").width * 0.9}
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
    onQueryLaunchwithName: (fDate, eDate, name) =>
      dispatch(queryLaunchWithName(fDate, eDate, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
