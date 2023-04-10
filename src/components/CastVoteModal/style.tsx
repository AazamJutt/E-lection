import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../core/theme";

type Styles = {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  input: ViewStyle;
  closeButton: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: theme.colors.backdrop,
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: theme.colors.backdrop,
    height: 200,
    width: 330,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    color: theme.colors.text,
    backgroundColor: "transparent",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    margin: 10,
    padding: 2,
    borderRadius: 50,
  },
});
