import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBoard } from "../store/board.actions";
import { headerStyles } from "./header.styles";
import { gameModes } from "../core/board";
import { State } from "../store/store";

export const Header = () => {
  const dispatch = useDispatch();
  const remainingBombs = useSelector<State>(
    ({ board: { difficulty, cells } }) => {
      const { bombsCount } = gameModes[difficulty!];
      let flaggedCells = 0;

      cells!.forEach((row) =>
        row.forEach((cell) => {
          if (cell.flagged && !cell.revealed) {
            flaggedCells++;
          }
        })
      );

      return bombsCount - flaggedCells;
    }
  );

  const handleGoBack = () => {
    dispatch(setBoard(null, null));
  };

  return (
    <View style={headerStyles.header}>
      <TouchableOpacity onPress={handleGoBack} style={headerStyles.button}>
        <Text style={headerStyles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Text style={headerStyles.headerText}>
        💣 remaining: {remainingBombs as number}
      </Text>
    </View>
  );
};
