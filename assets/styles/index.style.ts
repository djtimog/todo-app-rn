import { StyleSheet } from "react-native";
import { ColorScheme } from "@/hooks/useTheme";

export const createIndexStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      backgroundColor: colors.bg,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 24,
      color: colors.text,
      textAlign: "center",
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      paddingHorizontal: 40,
      borderRadius: 20,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
  });
