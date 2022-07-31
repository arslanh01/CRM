import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListCustomers } from "../hooks";
import Row from "./row";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

const List = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const region = useSelector((state) =>
    state.customers.list.regions.find((r) => r.id === regionID)
  );
  const customers = useListCustomers(regionID);

  return (
    <View>
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
            text="Add Animal"
            onPress={() => {
              navigate("Add Animal");
            }}
            disabled={false}
          />
        </>
      )}
    </View>
  );
};

export default List;
