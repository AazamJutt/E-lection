import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { styles } from "./style";

interface BackButtonProps {
  goBack: () => void;
}

export default function BackButton({ goBack }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Avatar.Icon size={40} icon="arrow-left" />
    </TouchableOpacity>
  );
}