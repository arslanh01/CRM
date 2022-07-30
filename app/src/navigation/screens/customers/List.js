import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import List from "../../../features/customers/List";

// top level display component only - declares a view that will be part of navigation
const ListCustomers = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
);

export default ListCustomers;
