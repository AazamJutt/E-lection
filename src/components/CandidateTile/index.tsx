import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Candidate } from "../../models/Candidate";
import { styles } from "./style";

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

export default CandidateTile;
