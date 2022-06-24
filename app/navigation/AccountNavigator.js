import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";
import MessagesScreen from "../screens/MessagesScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.MESSAGES}
      component={MessagesScreen}
      options={{ title: "Messages" }}
    />
    <Stack.Screen
      name={routes.USER_LISTINGS}
      component={ListingsScreen}
      options={{ title: "Your Listings" }}
    />
    <Stack.Screen
      name={routes.USER_LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={({ route }) => ({
        headerShown: Platform.OS === "android" ? true : false,
        title: route.params.title,
      })}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
