import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
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
        Create Account
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 32,
        }}
      >
        Sign up to get started
      </Text>
      <View style={{ width: "100%", maxWidth: 360 }}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 16,
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 16,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            marginBottom: 24,
          }}
        />
        <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
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
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: 20 }}
      >
        <Text style={{ color: "#007bff", fontSize: 16 }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
