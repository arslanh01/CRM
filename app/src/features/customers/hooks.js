import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../../utilities/helpers";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customers.edit.status);
  const fields = useSelector((state) => state.customers.form.fields);
  console.log("in hook", customerID, status, fields);

  useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    } else {
      dispatch(actions.resetForm());
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customers.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customers.edit.status);
};

export const useListCustomers = (regionID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);
  const customers = useSelector((state) => state.customers.list.customers);
  const regions = useSelector((state) => state.customers.list.regions);
  const region = regions.find((r) => r.id === regionID);
  const filteredCustomers = customers.filter((c) => c.region === region.name);
  return filteredCustomers;
};

export const useListRegions = () => {
  return useSelector((state) => state.customers.list.regions);
};
