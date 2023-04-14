import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";

interface AppLayoutProps {
  children: ReactNode;
}

type AppLayoutStyles = {
  background: ViewStyle;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return <SafeAreaView style={styles.background}>{children}</SafeAreaView>;
};

export default AppLayout;

const styles = StyleSheet.create<AppLayoutStyles>({
  background: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
