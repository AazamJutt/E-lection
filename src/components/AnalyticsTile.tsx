import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { Candidate } from "../models/Candidate";
import { Avatar, Text } from "react-native-paper";
import { theme } from "../core/theme";
import { type } from "os";

interface AnalyticsTileProps {
  candidate: Candidate;
  count: number;
  percentage: number;
}

type Styles = {
  container: ViewStyle;
  infoContainer: ViewStyle;
  name: TextStyle;
  percentage: TextStyle;
};

const AnalyticsTile = ({
  candidate: { image, name },
  count,
  percentage,
}: AnalyticsTileProps) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={80}
        source={{
          uri: image,
        }}
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text>Count: {count}</Text>
        </View>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
    </View>
  );
};

export default AnalyticsTile;

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    margin: 10,
    borderColor: theme.colors.text,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
  },
});
