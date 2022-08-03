import { createSlice } from "@reduxjs/toolkit";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../utilities/helpers";

const name = "customers";

const initialState = {
  list: {
    status: PENDING,
    customers: [],
    regions: [
      { id: 1, name: "Asia" },
      { id: 2, name: "Australia" },
      { id: 3, name: "Africa" },
      { id: 4, name: "Europe" },
      { id: 5, name: "North America" },
      { id: 6, name: "South America" },
    ],
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  form: {
    fields: {
      first_name: null,
      last_name: null,
      email: null,
      mobile: null,
      region: null,
    },
  },
  error: {
    message: "",
  },
};

const reducers = {
  createCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editCustomer: (state, { payload }) => {
    state.edit.status = REQUESTING;
  },
  setForm: (state, { payload }) => {
    const customer = state.list.customers.find((a) => a.id === payload);

    if (customer) {
      state.form.fields = customer;
    } else {
      state.error.message = `could not find customer with id: ${payload}`;
    }
  },
  resetForm: (state) => {
    state.form.fields = initialState.form.fields;
  },
  editCustomerResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editCustomerError: (state, { payload }) => {
    state.edit.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editCustomerStatus: (state, { payload }) => {
    state.edit = payload;
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  loadResult: (state, { payload }) => {
    state.list.customers = payload;
  },
  loadCustomers: (state) => {
    state.list.status = REQUESTING;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerResult,
  createCustomerError,
  setForm,
  resetForm,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  editCustomerStatus,
  setFormField,
  loadResult,
  loadCustomers,
} = slice.actions;

export default slice.reducer;
