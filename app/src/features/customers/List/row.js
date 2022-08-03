import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Row = ({ customer }) => {
  const { navigate } = useNavigation();
  console.log("in row", customer);

  return (
    <View key={customer.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
      <TouchableOpacity
        onPress={() => navigate("Edit Customer", { customerID: customer.id })}
      >
        <Text key={"id"}>ID: {customer.id}</Text>
        <Text key={"fn"}>First Name: {customer.first_name}</Text>
        <Text key={"ln"}>Last Name: {customer.last_name}</Text>
        <Text key={"email"}>Email Address: {customer.email}</Text>
        <Text key={"mobile"}>Mobile Number: {customer.mobile}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Row;
