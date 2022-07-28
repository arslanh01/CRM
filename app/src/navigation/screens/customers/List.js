import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

// top level display component only - declares a view that will be part of navigation
const ListCustomers = () => (
  <SafeAreaView>
    <ScrollView>
      <Text>List</Text>
    </ScrollView>
  </SafeAreaView>
);

export default ListCustomers;
