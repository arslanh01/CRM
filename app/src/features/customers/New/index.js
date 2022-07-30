import React from "react";
import { useNewCustomer, useCreateCustomerStatus } from "../hooks";
import Form from "../Form";

const New = () => {
  const { onSubmit } = useNewCustomer();
  const status = useCreateCustomerStatus();

  return <Form handleSubmit={onSubmit} status={status} customerID={null} />;
};

export default New;
