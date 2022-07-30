import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUpdateFields } from "../hooks";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../../utilities/helpers";
import Button from "../../../components/Button";
import formStyles from "./styles";

const Form = ({ handleSubmit, status, customerID }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerID);

  const { first_name, last_name, email, mobile, region } = fields;

  const onSubmit = () => {
    handleSubmit();
    navigate("Customers");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          key={"first_name"}
          placeholder={first_name || "First Name"}
          value={first_name || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("first_name", v)}
        />

        <View style={{ height: 15, width: "100%" }}></View>

        <TextInput
          key={"last_name"}
          placeholder={last_name || "Last Name"}
          value={last_name || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("last_name", v)}
        />

        <TextInput
          key={"email"}
          placeholder={email || "Email Address"}
          value={email || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("email", v)}
        />

        <TextInput
          key={"mobile"}
          placeholder={mobile || "Mobile Number"}
          value={mobile || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("mobile", v)}
        />

        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={status !== PENDING && status !== INPROGRESS}
        />
      </View>
    </View>
  );
};

export default Form;
