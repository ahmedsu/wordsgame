import ProgressBar from "components/ProgressBar";
import React, { useEffect, useState, useRef } from "react";
import { View, FlatList, Dimensions, Alert } from "react-native";
import BottomSheet from "components/BottomSheet";
import firestoreGet from "@helpers/firestoreGet";

const { height, width } = Dimensions.get("screen");

export interface IQuestion {
  choices: string[];
  correct_word: string;
  sentence: string;
  words_de: string[];
  correct_word_en: string;
  answer: string;
  id: number;
}

const Home = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IQuestion[]>([]);
  const [show, setShow] = useState(true);
  const ref = useRef<any>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const updateAnswer = (id: number, value: string) => {
    const questns = [...filteredQuestions];

    const idx = questns.findIndex((e) => e.id === id);
    if (idx != -1) {
      questns[idx].answer = value;
      setFilteredQuestions([...questns]);
    }
  };

  const resetValues = (questionsArr: IQuestion[]) => {
    setFilteredQuestions([...questionsArr]);
    setCurrentQuestion(0);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };
  const updateQuestionNumber = () => {
    if (currentQuestion + 1 >= filteredQuestions.length) {
      const filtered = [
        ...filteredQuestions.filter((e) => e.answer !== e.correct_word),
      ];
      if (filtered.length == 0) {
        return Alert.alert(
          "Alert",
          "Congratulations, you have finished the test",
          [
            {
              text: "Ok",
              onPress: () => {
                resetValues(questions);
              },
            },
          ]
        );
      }
      resetValues(filtered);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };
  useEffect(() => {
    getFirestoreData();
  }, []);

  const getFirestoreData = async () => {
    const data = await firestoreGet("exercises_en_de");
    const arr = data.map((e: any, id: number) => ({
      ...e._data,
      answer: null,
      id,
    }));
    setQuestions(arr);
    setFilteredQuestions(arr);
    return;
  };

  useEffect(() => {
    if (ref.current)
      ref.current.scrollToOffset({
        animated: true,
        offset: currentQuestion * width,
      });
  }, [currentQuestion]);

  return (
    <View
      style={{
        backgroundColor: "#9ECBD3",
        height,
        width,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 150,
        }}
      >
        <ProgressBar
          numberOfQuestions={filteredQuestions.length}
          currentQuestion={currentQuestion}
        />
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        {show && (
          <FlatList
            ref={ref}
            horizontal
            style={{ flex: 1 }}
            pagingEnabled
            scrollEnabled={false}
            contentContainerStyle={{ flexGrow: 1 }}
            data={filteredQuestions}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ width, height: height - 150 }}>
                <BottomSheet
                  item={item}
                  updateAnswer={updateAnswer}
                  setCurrentQuestion={updateQuestionNumber}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
