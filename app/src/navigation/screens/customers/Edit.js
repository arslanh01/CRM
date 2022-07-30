import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import Edit from "../../../features/customers/Edit";

const EditScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Edit />
    </ScrollView>
  </SafeAreaView>
);

export default EditScreen;
