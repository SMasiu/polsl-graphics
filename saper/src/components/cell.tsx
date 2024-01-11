import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  flagCell,
  revealCell,
  revealCellsAround,
} from "../store/board.actions";
import { cellStyles } from "./cell.styles";
import { Position2D } from "../types/position.types";

export const Cell = ({ x, y }: Position2D) => {
  const dispatch = useDispatch();
  const { revealed, flagged, hasBomb, bombsAround } = useSelector(
    ({ board: { cells, completed } }) => ({
      ...cells[y][x],
      revealed: completed || cells[y][x].revealed,
    }),
    shallowEqual
  );

  const handlePress = () => {
    if (flagged || revealed) {
      return;
    }

    if (bombsAround === 0) {
      dispatch(revealCellsAround(x, y));
    } else {
      dispatch(revealCell(x, y));
    }
  };

  const handleLongPress = () => {
    if (revealed) {
      return;
    }
    dispatch(flagCell(x, y, !flagged));
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={1}
      style={[
        cellStyles.container,
        revealed ? cellStyles.containerVisible : cellStyles.containerHidden,
      ]}
    >
      {revealed ? (
        <Text style={cellStyles.label}>
          {hasBomb ? "💣" : bombsAround || null}
        </Text>
      ) : (
        flagged && <Text style={cellStyles.label}>🚩</Text>
      )}
    </TouchableOpacity>
  );
};
