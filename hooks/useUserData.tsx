import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { Redirect } from "expo-router";
import React, { createContext, useContext, useEffect } from "react";

export const DbUserContext = createContext<Doc<"users"> | null>(null);

export default function DbUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const syncUser = useMutation(api.user.syncUser);
  const user = useQuery(api.user.getUser);

  // create user in DB when signed in
  useEffect(() => {
    syncUser();
  }, []);

  if (user === undefined) return null; // loading state
  if (user === null) return <Redirect href="/(auth)/sign-in" />;

  return (
    <DbUserContext.Provider value={user}>{children}</DbUserContext.Provider>
  );
}

export const useDbUser = () => {
  const context = useContext(DbUserContext);
  if (!context)
    throw new Error("You are not using useDbUser inside the provider");

  return context;
};
