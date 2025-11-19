import { createIndexStyles } from "@/assets/styles/index.style";
import useTheme from "@/hooks/useTheme";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const { colors } = useTheme();
  const styles = createIndexStyles(colors);
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Todo App ✅</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
