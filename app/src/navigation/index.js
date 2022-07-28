import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/Welcome";
import AddCustomer from "./screens/customers/New";
import EditCustomer from "./screens/customers/Edit";
import CustomersList from "./screens/customers/List";
import RegionsList from "./screens/Regions";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Add Customer" component={AddCustomer} />
        <Stack.Screen name="Edit Customer" component={EditCustomer} />
        <Stack.Screen name="Customers" component={CustomersList} />
        <Stack.Screen name="Regions" component={RegionsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
