import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import VOTING_API from "../api/services/votes";
import Alert from "../components/Alert";
import CandidateTile from "../components/CandidateTile";
import CastVoteModal from "../components/CastVoteModal";
import Header from "../components/Header";
import useCandidateList from "../hooks/useCandidateList";
import AppLayout from "../layouts/AppLayout";
import Locales from "../locales/en.json";
import { Candidate } from "../models/Candidate";

const Dashboard = ({ navigation }: any) => {
  const { candidateList, isLoading } = useCandidateList();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCandidate, setSelectedCandidate] = useState<
    Candidate | undefined
  >();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [voteStatus, setVoteStatus] = useState<"success" | "error">("success");
  const [voteStatusMessage, setVoteStatusMessage] = useState<string>("");
  const [castPressed, setCastPressed] = useState<boolean>(false);
  const [license, setLicense] = useState<string>("");

  const displayDialog = () => {
    hideModal();
    setShowDialog(true);
  };
  const hideDialog = () => {
    setShowDialog(false);
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    const castVote = async () => {
      if (!selectedCandidate) return;
      try {
        const response = await VOTING_API.castVote({
          candidateId: selectedCandidate.id,
          voterId: license,
        });
        if (response.data.message) {
          setVoteStatusMessage(response.data.message);
          setVoteStatus("success");
        }
      } catch (err) {
        console.error(err);
        setVoteStatus("error");
      } finally {
        displayDialog();
        setCastPressed(false);
      }
    };
    if (castPressed) {
      hideModal();
      castVote();
    }
  }, [castPressed]);
  const handleCastVote = (driverLicense: string) => {
    setLicense(driverLicense);
    setCastPressed(true);
  };
  const rednerItem = ({ item }: { item: Candidate }) => (
    <CandidateTile
      key={item.id}
      candidate={item}
      showModal={showModal}
      setSelectedCandidate={setSelectedCandidate}
    />
  );
  return (
    <AppLayout>
      <Header title={Locales.screens.dashboard} />
      <CastVoteModal
        visible={visible}
        hideModal={hideModal}
        handleCastVote={handleCastVote}
      />
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate(Locales.screens.analytics)}
        >
          See Who is winning
        </Button>
      </View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={{ padding: 20 }}
          data={candidateList}
          keyExtractor={(item: Candidate) => item.id.toString()}
          renderItem={rednerItem}
        />
      )}
      <Alert
        visible={showDialog}
        alertMessage={voteStatusMessage}
        hideDialog={hideDialog}
        type={voteStatus}
      />
    </AppLayout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: 250,
    marginBottom: 20,
  },
});
