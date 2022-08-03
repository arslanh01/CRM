import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer, useEditCustomerStatus } from "../hooks";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute();
  const { customerID } = params;
  console.log("in edit feature", customerID);
  const { status, onSubmit } = useEditCustomer(customerID);

  return (
    <Form handleSubmit={onSubmit} status={status} customerID={customerID} />
  );
};

export default Edit;
