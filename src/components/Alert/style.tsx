import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Styles = {
  dialog: ViewStyle;
  title: TextStyle;
};
export const styles = StyleSheet.create<Styles>({
  dialog: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
  },
});
