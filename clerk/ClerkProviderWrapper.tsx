import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export const ClerkProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
  >
    {children}
  </ClerkProvider>
);
