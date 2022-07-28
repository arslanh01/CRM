import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

// top level display component only - declares a view that will be part of navigation
const ListRegions = () => (
  <SafeAreaView>
    <ScrollView>
      <Text>List Regions</Text>
    </ScrollView>
  </SafeAreaView>
);

export default ListRegions;
