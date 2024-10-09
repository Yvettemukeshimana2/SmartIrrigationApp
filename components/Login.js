 import React, { useState } from "react";
 import {
   View,
   Text,
   TextInput,
   Button,
   Alert,
   StyleSheet,
   Image,
 } from "react-native";
 import { useNavigation } from "@react-navigation/native"; // Use this for navigation
 import { auth } from "../Firebaseconfig"; // Adjust the import path if necessary
 import { signInWithEmailAndPassword } from "firebase/auth"; // Import the signIn method

 const Login = () => {
   const navigation = useNavigation(); // Initialize navigation
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async () => {
     try {
       // Use the signInWithEmailAndPassword method
       await signInWithEmailAndPassword(auth, email, password);
       Alert.alert("Success", "Login successful");
       navigation.navigate("Dashboard"); // Navigate to Dashboard on successful login
     } catch (error) {
       Alert.alert("Error", error.message); // Display error message if login fails
     }
   };

   return (
     <View style={styles.container}>
       <Image
         source={{
           uri: "https://tonymonacolandscaping.com/wp-content/uploads/2018/09/aquatech-orange-irrigation-logo.png",
         }}
         style={styles.logo}
       />
       <Text style={styles.title}>Login</Text>

       <TextInput
         placeholder="Email"
         value={email}
         onChangeText={setEmail}
         style={styles.input}
         keyboardType="email-address" // Added keyboard type for email
         autoCapitalize="none" // Prevent auto-capitalization
       />

       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         secureTextEntry
         style={styles.input}
       />

       <View style={styles.buttonContainer}>
         <Button title="Login" onPress={handleLogin} color="#4CAF50" />
       </View>

       <Text
         style={styles.link}
         onPress={() => navigation.navigate("Register")}
       >
         Don't have an account? Sign up
       </Text>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     padding: 16,
     backgroundColor: "#f5f5f5",
   },
   logo: {
     width: 150,
     height: 150,
     marginBottom: 20,
   },
   title: {
     fontSize: 24,
     fontWeight: "bold",
     color: "#4CAF51",
     marginBottom: 24,
   },
   input: {
     width: "80%",
     height: 40,
     borderColor: "#4CAF50",
     borderWidth: 1,
     borderRadius: 5,
     paddingHorizontal: 10,
     marginBottom: 12,
   },
   buttonContainer: {
     width: "80%",
     marginBottom: 20,
   },
   link: {
     color: "#4CAF50",
     textDecorationLine: "underline",
     marginTop: 20,
   },
 });

 export default Login;