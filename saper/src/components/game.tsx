import React from "react";
import { View } from "react-native";
import { ResultModal } from "./result-modal";
import { Board } from "./board";
import { gameStyles } from "./game.styles";
import { Header } from "./header";

export const Game = () => {
  return (
    <View style={gameStyles.container}>
      <Header />
      <Board />
      <ResultModal />
    </View>
  );
};
