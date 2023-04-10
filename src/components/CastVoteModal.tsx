import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    View,
    ViewStyle
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { theme } from "../core/theme";
import LicenseInput from "./LicenseInput";

interface CastVoteModalProps {
  visible: boolean;
  hideModal: () => void;
  handleCastVote: (license: string) => void;
}

type Styles = {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  input: ViewStyle;
  closeButton: ViewStyle;
};

const CastVoteModal = ({
  visible,
  hideModal,
  handleCastVote,
}: CastVoteModalProps) => {
  const [license, setLicense] = useState<string>("");
  const handleCast = () => {
    handleCastVote(license);
    setLicense("");
  };
  return (
    <Modal transparent={true} visible={visible} onRequestClose={hideModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <IconButton
            style={styles.closeButton}
            icon="close"
            size={20}
            onPress={hideModal}
          />
          <View
            style={{
              width: "100%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LicenseInput
              theme={theme}
              license={license}
              setLicense={setLicense}
              style={styles.input}
              label="Driver's License"
              value={license}
            />
            <Button mode="contained" onPress={handleCast}>
              Cast Vote
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CastVoteModal;

const styles = StyleSheet.create<Styles>({
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
