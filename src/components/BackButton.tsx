import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Avatar } from "react-native-paper";

interface BackButtonProps {
  goBack: () => void;
}

type Styles = {
  container: ViewStyle;
};

export default function BackButton({ goBack }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Avatar.Icon size={40} icon="arrow-left" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 10,
    left: 4,
  },
});
