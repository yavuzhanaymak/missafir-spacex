/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import Details from "../../components/Details"; 
import { queryLaunch } from "../../store/actions/launches";
function DetailScreen(props) {
  const data = props.queryData;
  console.log(props)
  const renderItem = ({ item }) => (
    <Details navigation={props.navigation} imageUrl={item.links?.patch.small} data={item}/>
  );
  const NoData = () => {
    return (
      <View style={styles.noData}>
        <Text style={styles.noDataText}>No Data</Text>
      </View>
    );
  }
   return (
    <View style={styles.container}>
     {
data.docs.length > 0 ?  <FlatList
data={data?.docs}
renderItem={renderItem}
keyExtractor={item => item.id}
/> :
<NoData />
     }
   
 
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
