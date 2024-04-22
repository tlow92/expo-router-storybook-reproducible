import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type MyButtonProps = {
  onPress: () => void;
  text: string;
  href?: any;
};

export function MyButton<T>({ onPress, text, href }) {
  if (href) {
    return (
      <Link style={styles.container} href={href}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
