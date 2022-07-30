import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Row from "./row";
import Title from "../../../components/Title";
import welcomeStyles from "./styles";

const ListRegions = () => {
  const styles = StyleSheet.create(welcomeStyles());
  const regions = useSelector((state) => state.customers.list.regions);
  console.log(regions);

  return (
    <View style={styles.container}>
      <Title text="Regions List" />
      <FlatList
        data={regions}
        renderItem={(props) => <Row {...props} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListRegions;
