import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import useCandidateList from "../hooks/useCandidateList";
import useAnalyticsList from "../hooks/useAnalyticsList";
import { Candidate } from "../models/Candidate";
import Locales from "../locales/en.json";
import AppLayout from "../layouts/AppLayout";
import { Analytic } from "../models/Analytic";
import AnalyticsTile from "../components/AnalyticsTile";
import Header from "../components/Header";

const Analytics = () => {
  const navigation = useNavigation();
  const { candidateList } = useCandidateList();
  const { analyticsList, isLoading } = useAnalyticsList();
  const findCandidate = (candidateId: number): Candidate | undefined =>
    candidateList.find((candidate: Candidate) => candidate.id === candidateId);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getPercentage = (count: number): number =>
    totalCount !== 0 ? (count / totalCount) * 100 : 0;
  useEffect(() => {
    if (analyticsList) {
      setTotalCount(analyticsList.reduce((sum, obj) => sum + obj.count, 0));
    }
  }, [analyticsList]);

  const renderItem = ({ item }: { item: Analytic }) => {
    let candidate = findCandidate(item.candidateId);
    const percentage = getPercentage(item.count);
    return candidate ? (
      <AnalyticsTile
        candidate={candidate}
        count={item.count}
        percentage={percentage}
      />
    ) : (
      <></>
    );
  };

  return (
    <AppLayout>
      <Header
        title={Locales.screens.analytics}
        goBack={() => navigation.navigate(Locales.screens.dashboard)}
      />
      {isLoading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          data={analyticsList}
          keyExtractor={(item: Analytic) => item.candidateId.toString()}
          renderItem={renderItem}
        />
      )}
    </AppLayout>
  );
};

export default Analytics;
