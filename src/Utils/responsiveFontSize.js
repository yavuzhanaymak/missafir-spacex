import { Platform, StatusBar, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const isIphoneX =
  Platform.OS === "ios" &&
  (width === 780 ||
    width === 780 ||
    height === 812 ||
    width === 812 ||
    height === 844 ||
    width === 844 ||
    height === 896 ||
    width === 896 ||
    height === 926 ||
    width === 926);

export function responsiveFontSize(fontSize, standardScreenHeight = 680) {
  const standardLength = height;
  const offset = Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX || Platform.OS === "android"
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
