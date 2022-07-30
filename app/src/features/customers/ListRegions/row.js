import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";

const Row = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <Button
      onPress={() => navigate("Customers", { regionID: item.id })}
      text={item.name}
      disabled={false}
    />
  );
};

export default Row;
