import Button from "components/Button";
import React from "react";
import { View, Text } from "react-native";
import Divider from "../Divider";
interface Props {
  correct: boolean;
  answer?: string;
  setCurrentQuestion: () => void;
}
const AnswerSheet = ({
  correct = false,
  answer = "",
  setCurrentQuestion,
}: Props) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        backgroundColor: correct ? "#33E8E9" : "#FF7E8A",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 200,
        paddingHorizontal: 30,
        paddingTop: 20,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {correct ? "Great Job" : `Answer: ${answer}`}
        </Text>
        <Divider size={25} />
        <Button
          onPress={() => {
            setCurrentQuestion();
          }}
          title="CONTINUE"
          type={correct ? "correct" : "wrong"}
        />
      </View>
    </View>
  );
};

export default AnswerSheet;
