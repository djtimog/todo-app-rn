import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createAuthStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 32,
      backgroundColor: colors.bg,
      justifyContent: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 24,
      textAlign: "center",
    },
    input: {
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 16,
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 16,
      backgroundColor: colors.backgrounds.input,
      color: colors.text,
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      borderRadius: 20,
      alignItems: "center",
      marginTop: 8,
      marginBottom: 16,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 17,
      fontWeight: "600",
    },
    linkContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 8,
      alignItems: "center",
    },
    text: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "500",
    },
    linkText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: "500",
    },
    homeButton: {
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 12,
      marginTop: 50,
      minWidth: "auto",
      textAlign: "center",
      backgroundColor: colors.backgrounds.input,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
  });
