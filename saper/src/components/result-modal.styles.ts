import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const resultModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageBox: {
    padding: 30,
    backgroundColor: theme.white,
    borderRadius: 6,
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
});
