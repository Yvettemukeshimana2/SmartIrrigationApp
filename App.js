 import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";
 import Login from "./components/Login";
 import Register from "./components/Register";
 import Dashboard from "./components/Dashboard";
 
//  import AboutUsScreen from "./components/AboutUsScreen";
 import MainLayout from "./components/layout/Mainlayout"; // Layout wrapping NavBar & Footer

 const Stack = createStackNavigator();

 const App = () => {
   return (
     <NavigationContainer>
       <MainLayout>
               {/* Wrap screens with MainLayout to include NavBar and Footer */}
         <Stack.Navigator initialRouteName="Dashoard">
      
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Dashboard" component={Dashboard} />
           <Stack.Screen name="Register" component={Register} />
           {/* <Stack.Screen name="About" component={AboutUsScreen} /> */}
         </Stack.Navigator>
       </MainLayout>
     </NavigationContainer>
   );
 };
 export default App;
