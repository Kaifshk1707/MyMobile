import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let valid = true;

    // Regex for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      navigation.navigate("Home");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#333",
          marginBottom: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 32,
        }}
      >
        Login to continue
      </Text>
      <View style={{ width: "100%", maxWidth: 360 }}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: emailError ? "red" : "#ddd",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 8,
          }}
        />
        {emailError ? (
          <Text style={{ color: "red", marginBottom: 8 }}>{emailError}</Text>
        ) : null}

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: passwordError ? "red" : "#ddd",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 8,
          }}
        />
        {passwordError ? (
          <Text style={{ color: "red", marginBottom: 24 }}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity
          onPress={validateForm}
          style={{
            backgroundColor: "#007bff",
            padding: 16,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "#007bff", fontSize: 16 }}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
