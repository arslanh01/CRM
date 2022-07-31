import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUpdateFields, useListRegions } from "../hooks";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
  const [regionID, setRegionID] = useState(1);
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerID);
  const regions = useListRegions();
  console.log(fields);

  const { first_name, last_name, email, mobile, region } = fields;

  const onSubmit = () => {
    handleSubmit();
    navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>First Name:</Text>
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

        <Text>Last Name:</Text>

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

        <View style={{ height: 15, width: "100%" }}></View>
        <Text>Email Address::</Text>
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

        <View style={{ height: 15, width: "100%" }}></View>
        <Text>Mobile Number:</Text>
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

        <View style={{ height: 15, width: "100%" }}></View>
        <Text>Region:</Text>
        <SelectDropdown
          data={regions}
          defaultValue={region || ""}
          onSelect={(selectedItem, index) => {
            setFormField("region", selectedItem.name);
            setRegionID(selectedItem.id);
          }}
          defaultButtonText={region || "Select Region"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />

        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={
            first_name === null ||
            last_name === null ||
            email === null ||
            mobile === null ||
            region === null ||
            (status !== PENDING && status !== INPROGRESS)
          }
        />
      </View>
    </View>
  );
};

export default Form;
