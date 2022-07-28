import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/Welcome";
import AddCustomer from "./screens/Customers/New";
import EditCustomer from "./screens/Customers/Edit";
import CustomersList from "./screens/Customers/List";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Add Customer" component={AddCustomer} />
        <Stack.Screen name="Edit Customer" component={EditCustomer} />
        <Stack.Screen name="Customers" component={CustomersList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
