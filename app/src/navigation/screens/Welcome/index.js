import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import welcomeStyles from "./styles";

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title text="Welcome to Customer Relationship Management App" />

          <Button
            onPress={() => navigate("Add Customer")}
            text="Add a Customer"
            disabled={false}
          />

          <Button
            onPress={() => navigate("Customers")}
            text="View Customers"
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
