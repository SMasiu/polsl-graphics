import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const boardStyles = StyleSheet.create({
  horizontalContainer: {
    flexGrow: 0,
    marginHorizontal: 20,
  },
  horizontalContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  verticalContainer: {
    flexGrow: 0,
  },
  grid: {
    borderWidth: 6,
    borderTopColor: theme.grey,
    borderRightColor: theme.white,
    borderBottomColor: theme.white,
    borderLeftColor: theme.grey,
  },
  rows: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
