import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/ProFile";
import Todo from "../screens/Todo";

// Custom drawer content component
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          // Perform logout functionality
        }}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={{ width: "70%" }}
        drawerContentOptions={{
          activeTintColor: "blue",
          activeBackgroundColor: "lightblue",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Todo" component={Todo} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
