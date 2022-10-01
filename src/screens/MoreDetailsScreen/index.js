/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import Details from "../../components/Details";
import { queryLaunch } from "../../store/actions/launches";
import Logo from "../../components/Logo";
import convertDate from "../../Utils/convertDate";
import SocialButton from "../../components/SocialButton";
function MoreDetails(props) {
  const PressedLinkToOut = async (url) => {
    await Linking.openURL(url);
  };
  const data = props.route.params.data;
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={{ uri: data?.links?.patch?.large }}
          style={styles.image}
        />
      </View>

      <View style={styles.textArea}>
        <Text style={styles.textName}>{data?.name}</Text>
        <Text style={styles.textName}>Flight Number {data?.flight_number}</Text>
        <Text style={styles.textName}>
          Launch Date {convertDate(data?.date_local)}
        </Text>
        <Text style={styles.textName}>{data?.details}</Text>
      </View>
      <View style={styles.socialArea}>
        <SocialButton
          action={() => PressedLinkToOut(data?.links.webcast)}
          type="youtube"
          links={data?.links.webcast}
        />
        <SocialButton
          action={() => PressedLinkToOut(data?.links.wikipedia)}
          type="wikipedia"
          links={data?.links.wikipedia}
        />

        <SocialButton
          action={() => PressedLinkToOut(data?.links.presskit)}
          type="nasa"
        />
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
