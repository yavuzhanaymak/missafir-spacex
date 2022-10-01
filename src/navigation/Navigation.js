import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { connect } from "react-redux";
import { logout } from "../store/actions/user";
import MoreDetailsScreen from "../screens/MoreDetailsScreen";
const Stack = createNativeStackNavigator();

function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            options={{ title: "Details SpaceX Launches" }}
            name="DetailScreen"
            component={DetailsScreen}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            options={{ title: "More Details" }}
            name="moreDetailsScreen"
            component={MoreDetailsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
