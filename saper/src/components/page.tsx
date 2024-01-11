import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { pageStyles } from "./page.styles";
import { DifficultySelector } from "./difficulty-selector";
import { Game } from "./game";

export const Page = () => {
  const boardInitialized = useSelector(
    ({ board: { cells } }) => cells !== null
  );

  return (
    <SafeAreaView style={pageStyles.container}>
      {boardInitialized ? <Game /> : <DifficultySelector />}
    </SafeAreaView>
  );
};
