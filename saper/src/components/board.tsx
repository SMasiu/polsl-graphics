import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { Cell } from "./cell";
import { boardStyles } from "./board.styles";
import { cellSize, gameModes } from "../core/board";
import { GameDifficulty } from "../types/game.types";
import { State } from "../store/store";

export const Board = () => {
  const difficulty = useSelector<State>(
    ({ board }) => board.difficulty
  ) as GameDifficulty;
  const { columns, rows } = gameModes[difficulty];

  let cells = [];

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      cells.push(<Cell key={`cell-${i}-${j}`} x={i} y={j} />);
    }
  }

  return (
    <ScrollView
      style={boardStyles.horizontalContainer}
      contentContainerStyle={boardStyles.horizontalContent}
      bounces={false}
      horizontal
    >
      <ScrollView
        style={boardStyles.verticalContainer}
        contentContainerStyle={boardStyles.grid}
        bounces={false}
      >
        <View style={[boardStyles.rows, { width: columns * cellSize }]}>
          {cells}
        </View>
      </ScrollView>
    </ScrollView>
  );
};
