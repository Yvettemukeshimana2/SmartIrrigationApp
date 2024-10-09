 import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../Firebaseconfig";  
import { useNavigation } from "@react-navigation/native"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigation = useNavigation();  
  const { control, handleSubmit, watch } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created");
      navigation.navigate("Login"); 
    } catch (error) {
      Alert.alert("Error", error.message);
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
      <Text style={styles.title}>Sign Up</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
        name="email"
        rules={{ required: "Email is required" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry
            style={styles.input}
          />
        )}
        name="password"
        rules={{ required: "Password is required" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Confirm Password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry
            style={styles.input}
          />
        )}
        name="confirmPassword"
        rules={{ required: "Please confirm your password" }}
      />

      <Button
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        color="#4CAF50"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },
  link: {
    marginTop: 15,
    color: "#4CAF50",
  },
});

export default Register;
