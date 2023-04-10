import { Avatar, Card, Text } from "react-native-paper";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import React from "react";
import Button from "./Button";
import { Candidate } from "../models/Candidate";
import { theme } from "../core/theme";

interface LeftContentProps {
  imageUrl: string;
}

const LeftContent = ({ imageUrl }: LeftContentProps) => {
  return (
    <Avatar.Image
      size={50}
      source={{
        uri: imageUrl,
      }}
    />
  );
};

interface CandidateProps {
  candidate: Candidate;
  showModal: () => void;
  setSelectedCandidate: (candidate: Candidate) => void;
}

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

const CandidateTile = ({
  candidate,
  showModal,
  setSelectedCandidate,
}: CandidateProps) => {
  const handleCandidateSelected = () => {
    setSelectedCandidate(candidate);
    showModal();
  };
  const { name, party, image, motto } = candidate;
  return (
    <Card style={styles.container}>
      <Card.Title
        title={name}
        subtitle={party}
        left={() => <LeftContent imageUrl={image} />}
      />
      <Card.Content>
        <Text style={styles.text}>{motto}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleCandidateSelected}>Vote For Me</Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create<Styles>({
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

export default CandidateTile;
