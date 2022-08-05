import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { clearCustomers } from "../../../features/customers/reducers";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import welcomeStyles from "./styles";

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title text="Welcome to Customer Relationship Management App" />

          <Button
            onPress={() => navigate("Add Customer")}
            text="Create Customer"
            disabled={false}
          />

          <Button
            onPress={() => navigate("Regions")}
            text="View Regions"
            disabled={false}
          />
          <Button
            onPress={() => dispatch(clearCustomers())}
            text="Clear Storage"
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
