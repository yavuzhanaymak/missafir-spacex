import { StyleSheet } from "react-native";
import { responsiveFontSize } from "../../Utils/responsiveFontSize";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 150,
    borderColor: "#e2e2e2",
    borderWidth: 1,
   

 
  },
  imageArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 90,
    width: 90,
  },
  textArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textArea: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    
  },
  textName: {
    fontSize: responsiveFontSize(15),
    fontWeight: "400",
  },
  textDetail: {
    fontSize: responsiveFontSize(12),
    fontWeight: "300",
    color:'#000'
   },
   textFlightNumber: {
    fontSize: responsiveFontSize(10),
    fontWeight: "300",
    color: "#005288",
    },
    textDate: {
      fontSize: responsiveFontSize(10),
      fontWeight: "300",
      color: "#005288",
      },
});
