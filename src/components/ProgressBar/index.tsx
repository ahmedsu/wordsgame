import React from "react";
import { View, Text } from "react-native";

interface Props {
  numberOfQuestions: number;
  currentQuestion: number;
}
const ProgressBar = ({ numberOfQuestions, currentQuestion }: Props) => {
  console.log("NUMBER OF QUESTIONS", numberOfQuestions);
  console.log("CURRENT", currentQuestion);
  return (
    <View
      style={{
        backgroundColor: "#64A6B2",
        padding: 5,
        borderRadius: 15,
        height: 30,
        width: 300,
      }}
    >
      <View
        style={{
          height: "100%",
          borderRadius: 10,
          backgroundColor: "#18E5EA",
          width:
            numberOfQuestions == 0
              ? 0
              : (290 / numberOfQuestions) * currentQuestion,
        }}
      ></View>
    </View>
  );
};

export default ProgressBar;
