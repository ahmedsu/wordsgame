import React from "react";
import { View, Text, Pressable } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  type: "check" | "wrong" | "correct";
}
const Button = ({ title, onPress, type }: Props) => {
  return (
    <Pressable
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 60,
        backgroundColor: type === "check" ? "#22E3EA" : "white",
        borderRadius: 30,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontWeight: "bold",
          color:
            type === "check"
              ? "white"
              : type === "correct"
              ? "#22E3EA"
              : "#FF7E8A",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
