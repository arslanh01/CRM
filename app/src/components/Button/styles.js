import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "grey";
    color = "black";
  } else {
    backgroundColor = "green";
    color = "white";
  }

  return StyleSheet.create({
    button: {
      width: 300,
      height: 50,
      borderRadius: 10,
      margin: 10,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      color: color,
    },
  });
};

export default stylesFn;
