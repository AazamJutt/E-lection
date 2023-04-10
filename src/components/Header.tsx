import React from "react";
import {
  StyleSheet,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";
import BackButton from "./BackButton";

interface HeaderStyles {
  header: ViewStyle;
  title: ViewStyle;
  bordered: ViewStyle;
  titleText: TextStyle;
}

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

const styles = StyleSheet.create<HeaderStyles>({
  header: {
    flexDirection: "row",
  },
  title: {
    paddingStart: 20,
    justifyContent: "center",
    paddingVertical: 15,
  },
  bordered: {
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: theme.colors.primary,
  },
  titleText: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
