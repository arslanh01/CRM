import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import List from "../../../features/customers/ListRegions";

// top level display component only - declares a view that will be part of navigation
const ListRegions = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
);

export default ListRegions;
