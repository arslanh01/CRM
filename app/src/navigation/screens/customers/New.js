import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
// import New from "../../../features/animal/New";

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Text>New</Text>
    </ScrollView>
  </SafeAreaView>
);

export default NewScreen;
