import React, { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  Modal,
  Text,
} from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Minesweeper } from "../core/minesweeper";
import { setBoard } from "../store/board.actions";
import { resultModalStyles } from "./result-modal.styles";

const { height: screenHeight } = Dimensions.get("screen");

export const ResultModal = () => {
  const translateY = useRef(new Animated.Value(screenHeight));
  const scaleValue = useRef(new Animated.Value(0));
  const scale = scaleValue.current.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.4, 1],
  });
  const dispatch = useDispatch();
  const { difficulty, gameCompleted, gameWon } = useSelector(
    ({ board: { difficulty: gameDifficulty, completed, won } }) => ({
      difficulty: gameDifficulty,
      gameCompleted: completed,
      gameWon: won,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (gameCompleted) {
      Animated.sequence([
        Animated.timing(translateY.current, {
          toValue: 0,
          duration: 1000,
          easing: Easing.bezier(0.0, 0.0, 0.2, 1),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [gameCompleted]);

  const handleRetryPress = () => {
    const game = new Minesweeper();
    const board = game.buildGame(difficulty);
    dispatch(setBoard(board, difficulty));
  };

  if (!gameCompleted) {
    return null;
  }

  return (
    <Modal onRequestClose={handleRetryPress} transparent visible>
      <Animated.View
        style={[
          resultModalStyles.container,
          { transform: [{ translateY: translateY.current }] },
        ]}
      >
        <Animated.View
          style={[resultModalStyles.messageBox, { transform: [{ scale }] }]}
        >
          <Text style={resultModalStyles.title}>
            {gameWon ? "You Win" : "You Lose"}
          </Text>
          <Button title="Retry" onPress={handleRetryPress} />
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
