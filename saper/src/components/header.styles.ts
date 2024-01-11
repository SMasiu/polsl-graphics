import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "800",
    color: theme.black,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: theme.white,
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
});
