import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { Avatar, Dialog, Portal, Text } from "react-native-paper";
import { theme } from "../core/theme";
import Locales from "../locales/en.json";
interface AlertProps {
  alertMessage: string;
  visible: boolean;
  hideDialog: () => void;
  type: "success" | "error";
}

type Styles = {
  dialog: ViewStyle;
  title: TextStyle;
};

const Alert = ({ alertMessage, visible, hideDialog, type }: AlertProps) => {
  const alertInfo = {
    icon: type === "success" ? "check-bold" : "alert",
    title:
      type === "success"
        ? Locales.title.voteCasted.success
        : Locales.title.voteCasted.error,
    message: alertMessage,
  };
  return (
    <Portal>
      <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
        <Avatar.Icon
          style={{
            backgroundColor:
              type === "success" ? theme.colors.success : theme.colors.error,
          }}
          size={60}
          icon={alertInfo.icon}
        />
        <Dialog.Title style={styles.title}>{alertInfo.title}</Dialog.Title>
        <Dialog.Content>
          <Text>{alertInfo.message}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default Alert;

const styles = StyleSheet.create<Styles>({
  dialog: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
  },
});
