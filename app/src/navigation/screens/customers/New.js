import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import New from "../../../features/customers/New";

const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New />
    </ScrollView>
  </SafeAreaView>
);

export default NewScreen;
