import useTheme from "hooks/useTheme";
import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";

import firestoreGet from '@helpers/firestoreGet'

const FbTest = () => {

  useEffect(() =>{
    getFirestoreData()
  })

  const getFirestoreData = async () => {
   const data = await firestoreGet('exercises_en_de')
    console.log("== FS DATA ==")
    console.log(data)
    return
  }

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "black" }}>FB TEST</Text>
    </View>
  );
};

export default FbTest;
