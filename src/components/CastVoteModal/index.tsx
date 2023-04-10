import React, { useState } from "react";
import { Modal, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { theme } from "../../core/theme";
import { styles } from "./style";
import LicenseInput from "../LicenseInput";

interface CastVoteModalProps {
  visible: boolean;
  hideModal: () => void;
  handleCastVote: (license: string) => void;
}

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
