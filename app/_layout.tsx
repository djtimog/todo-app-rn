import { ClerkProviderWrapper } from "@/clerk/ClerkProviderWrapper";
import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ClerkProviderWrapper>
      <SafeAreaProvider>
        <ConvexProvider client={convex}>
          <ThemeProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
          </ThemeProvider>
        </ConvexProvider>
      </SafeAreaProvider>
    </ClerkProviderWrapper>
  );
}
