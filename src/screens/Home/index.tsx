import useTheme from "hooks/useTheme";
import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "black" }}>Home</Text>
    </View>
  );
};

export default Home;
