import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { theme } from "../../core/theme";

interface HeaderStyles {
  header: ViewStyle;
  title: ViewStyle;
  bordered: ViewStyle;
  titleText: TextStyle;
}

export const styles = StyleSheet.create<HeaderStyles>({
  header: {
    flexDirection: "row",
  },
  title: {
    paddingStart: 20,
    justifyContent: "center",
    paddingVertical: 15,
  },
  bordered: {
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: theme.colors.primary,
  },
  titleText: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
