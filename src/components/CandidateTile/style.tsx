import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { theme } from "../../core/theme";

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};
export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "transparent",
    borderColor: theme.colors.text,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});
