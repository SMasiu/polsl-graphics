import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Minesweeper } from "../core/minesweeper";
import { setBoard } from "../store/board.actions";
import { difficultySelectorStyles } from "./difficulty-selector.styles";
import { gameModes } from "../core/board";
import { GameDifficulty } from "../types/game.types";

export const DifficultySelector = () => {
  const dispatch = useDispatch();

  const handleSelect = (difficulty: GameDifficulty) => {
    const game = new Minesweeper();
    const board = game.buildGame(difficulty);
    dispatch(setBoard(board, difficulty));
  };

  return (
    <View style={difficultySelectorStyles.container}>
      <Text style={difficultySelectorStyles.title}>Select difficulty</Text>
      {Object.keys(gameModes).map((difficulty) => (
        <TouchableOpacity
          style={difficultySelectorStyles.button}
          key={difficulty}
          onPress={() => handleSelect(difficulty as GameDifficulty)}
        >
          <Text style={difficultySelectorStyles.buttonLabel}>{difficulty}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
