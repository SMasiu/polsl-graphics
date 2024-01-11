import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const difficultySelectorStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 20,
  },
  button: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.black,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: theme.white,
  },
});
