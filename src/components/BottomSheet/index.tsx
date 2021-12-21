import AnswerSheet from "components/AnswerSheet";
import Button from "components/Button";
import ChoiceBox from "components/ChoiceBox";
import React, { useState } from "react";
import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import { IQuestion } from "screens/Home";
import Divider from "../Divider";

interface Props {
  item: IQuestion;
  updateAnswer: (index: number, text: string) => void;
  setCurrentQuestion: () => void;
}
const BottomSheet = ({ item, updateAnswer, setCurrentQuestion }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#37647E",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 250,
          flexGrow: 1,
          alignItems: "center",
        }}
        style={{ flex: 1 }}
      >
        <Divider size={60} />
        <Text>Find the missing word</Text>
        <Divider />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {item.sentence.split(" ").map((e) => {
            return e.toLowerCase() === item.correct_word_en.toLowerCase() ? (
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationColor: "white",
                }}
              >
                {e}{" "}
              </Text>
            ) : (
              <Text style={{ fontSize: 22 }}>{e} </Text>
            );
          })}
        </View>
        <Divider />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            paddingHorizontal: 5,
          }}
        >
          {item.words_de.map((e) => {
            return (
              <Pressable
                style={{
                  height: 79,
                  justifyContent: "center",
                }}
              >
                {e === item.correct_word ? (
                  <>
                    {selectedAnswer === "" ? (
                      <View
                        style={{
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 18 }}>________</Text>
                      </View>
                    ) : (
                      <ChoiceBox
                        noMargin
                        title={selectedAnswer}
                        // disabled={!!selectedAnswer}
                        type={
                          selectedAnswer === item.correct_word
                            ? "correct"
                            : "incorrect"
                        }
                      />
                    )}
                  </>
                ) : (
                  <Text style={{ fontSize: 18 }}>{e} </Text>
                )}
              </Pressable>
            );
          })}
        </View>
        <Divider size={25} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 50,
            justifyContent: "center",
          }}
        >
          {item.choices.map((e, idx) => {
            return (
              <ChoiceBox
                key={idx}
                title={e}
                onPress={(text) => {
                  setSelectedAnswer(text);
                  updateAnswer(item.id, text);
                }}
                disabled={e !== selectedAnswer && selectedAnswer !== ""}
              />
            );
          })}
        </View>
      </ScrollView>

      {selectedAnswer !== "" && (
        <AnswerSheet
          answer={item.correct_word}
          correct={item.correct_word === selectedAnswer}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </View>
  );
};

export default BottomSheet;
