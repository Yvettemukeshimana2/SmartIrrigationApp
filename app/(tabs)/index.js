 import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";
 import Login from "@/components/Login"; // Adjust the path based on your project structure
 import Dashboard from "@/components/Dashboard"; // Your Dashboard screen component
 import Register from "@/components/Register"; // Your Register screen component

 const Stack = createStackNavigator();

 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Dashboard" component={Dashboard} />
         <Stack.Screen name="Register" component={Register} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };

 export default App;