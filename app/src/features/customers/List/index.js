import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListCustomers } from "../hooks";
import Row from "./row";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import listStyles from "./styles";

const List = () => {
  const styles = StyleSheet.create(listStyles());
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const region = useSelector((state) =>
    state.customers.list.regions.find((r) => r.id === regionID)
  );
  const customers = useListCustomers(regionID);

  return (
    <View style={styles.container}>
      <Title text={`Customers of ${region.name}`} />

      {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No customers yet!"}</Text>
          <Button
            text="Add One"
            onPress={() => {
              navigate("Add Customer");
            }}
            disabled={false}
          />
        </>
      )}
    </View>
  );
};

export default List;
