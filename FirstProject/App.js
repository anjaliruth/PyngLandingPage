import { StatusBar } from "expo-status-bar";
import React from 'react';

import { StyleSheet, Text, View } from "react-native";
import logo from "./Pyng.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <img src={logo} alt="logo" />
      </View>
      <View style={styles.buttons}>
        <button style={styles.button1}>Login</button>
        <button style={styles.button2}>Sign Up</button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: "flex",

    backgroundColor: "#EFEEEE",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    marginTop: "150px",
    width: "60%",
  },

  button1: {
    fontSize: "1.3rem",
    borderRadius: "20px",
    backgroundColor: "#FE07C8",
    color:"#EFEEEE",
    width:"300px",
    border: "2px solid #000000",
    padding: "5px",
marginBottom: "5px",
fontFamily: "Comfortaa-Regular"

  },
  button2: {
    fontSize: "1.3rem",
    borderRadius: "20px",
    backgroundColor: "#AA47AC",
    color:"#EFEEEE",
    width:"300px",
    border: " 2px solid #A010A3",
    padding: "5px",
    marginBottom: "50px", 
    fontFamily: "Comfortaa-Regular"
  },
});
