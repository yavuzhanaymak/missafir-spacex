import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Area: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateArea:
  {
    flexDirection: "row",
    padding: 10,
  },
  inputArea:
  {
    width: Dimensions.get("window").width,
  },
  buttonArea:
  {

  }
});
