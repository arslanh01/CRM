import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Row = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>First Name: {item.first_name}</Text>
        <Text key={"ln"}>Last Name: {item.last_name}</Text>
        <Text key={"email"}>Email Address: {item.email}</Text>
        <Text key={"mobile"}>Mobile Number: {item.mobile}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
