import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProduct from "./components/ListProduct";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const StackDemo = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName="Login">
        <StackDemo.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <StackDemo.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <StackDemo.Screen
          name="ListProduct"
          component={ListProduct}
          options={{ title: "Danh Sách sản phẩm" }}
        />
        {/* <StackDemo.Screen name='UpdateCars' component={UpdateCars} options={ {title:"Sưa thông tin xe!!"}} /> */}
      </StackDemo.Navigator>
    </NavigationContainer>
  );
}
