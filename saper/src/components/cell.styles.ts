import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";
import { cellSize } from "../core/board";

export const cellStyles = StyleSheet.create({
  container: {
    height: cellSize,
    width: cellSize,
    backgroundColor: theme.light,
    justifyContent: "center",
  },
  containerVisible: {
    borderWidth: 1,
    borderColor: theme.grey,
  },
  containerHidden: {
    borderWidth: 3,
    borderTopColor: theme.white,
    borderRightColor: theme.grey,
    borderBottomColor: theme.grey,
    borderLeftColor: theme.white,
  },
  label: {
    textAlign: "center",
    fontWeight: "800",
  },
});
