import React from "react";
import { View, Text, Pressable } from "react-native";

interface Props {
  title: string;
  onPress?: (text: string) => void;
  type?: "correct" | "incorrect";
  disabled?: boolean;
  noMargin?: boolean;
}
const ChoiceBox = ({
  title,
  onPress = () => {},
  type,
  disabled = false,
  noMargin = false,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress(title)}
      disabled={disabled}
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          paddingVertical: 15,
          paddingHorizontal: 25,
          backgroundColor: "white",
          margin: noMargin ? 3 : 10,
        },
        {
          backgroundColor:
            type == "correct"
              ? "#33E8E9"
              : type === "incorrect"
              ? "#FF7E8A"
              : "white",
        },
        disabled && {
          opacity: 0.7,
        },
      ]}
    >
      <Text style={{ color: "black" }}>{title}</Text>
    </Pressable>
  );
};

export default ChoiceBox;
