import React from "react";
import {
  View
} from "react-native";
import { Text } from "react-native-paper";
import BackButton from "../BackButton";
import { styles } from "./style";

interface HeaderProps {
  goBack?: undefined | (() => void);
  title: string;
}

export default function Header({ goBack, title }: HeaderProps) {
  return goBack ? (
    <View style={[styles.header, styles.bordered]}>
      <BackButton goBack={goBack} />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  ) : (
    <View style={[styles.title, styles.bordered]}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}
