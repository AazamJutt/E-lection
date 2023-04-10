import React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { Candidate } from "../../models/Candidate";
import { styles } from "./style";

interface AnalyticsTileProps {
  candidate: Candidate;
  count: number;
  percentage: number;
}

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

