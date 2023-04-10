import { TextStyle, ViewStyle, StyleSheet } from "react-native";
import { theme } from "../../core/theme";

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  name: TextStyle;
  percentage: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    margin: 10,
    borderColor: theme.colors.text,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
  },
});
