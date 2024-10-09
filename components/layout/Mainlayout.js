 import React from "react";
 import { View, StyleSheet } from "react-native";
 import NavBar from "../Navbar"; // Custom NavBar
 import Footer from "../Footer"; // Custom Footer

 const MainLayout = ({ children }) => {
   return (
     <View style={styles.container}>
       <NavBar /> {/* Navigation Bar */}
       <View style={styles.content}>
         {children} {/* Placeholder for screen content */}
       </View>
       <Footer /> {/* Footer */}
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   content: {
     flex: 1, // Main content area
   },
 });

 export default MainLayout;
