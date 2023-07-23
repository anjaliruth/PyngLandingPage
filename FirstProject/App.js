import { StatusBar } from "expo-status-bar";
import React from 'react';

import { StyleSheet, Text, View } from "react-native";
import person from "./Media/Help and Profile Icon.svg";
import send from "./Media/Send Pyng.svg"
import receive from "./Media/Recv Pyng.svg"
import wallet from "./Media/Wallet Icon.svg"
import group from "./Media/Group 1041.svg"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileLogoContainer}>
        <img src={person} alt="profile logo" style={styles.profileLogo}/>
      </View>
      <View style={styles.buttons}>
      <img src={group} alt="profile logo" style={styles.group}/>
      <img src={send} alt="profile logo" style={styles.send}/>
      <img src={receive} alt="profile logo" style={styles.receive} />
      <img src={wallet} alt="profile logo" style={styles.wallet}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
backgroundColor: "blue",
width: "100%"
  },

  profileLogoContainer: {
    width:"98%",
    backgroundColor: "yellow",
    justifyContent: "flex-end", // Aligns the content to the far right
    flexDirection: "row" // Ensures the items inside the container are in a row

  },
  profileLogo:{
    width: "5%",
    backgroundColor:"green"
  },
  // buttons{

  // }

  
});
