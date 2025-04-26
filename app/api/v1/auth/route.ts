import { useUser } from "@clerk/nextjs";
import React from "react";

export default function route() {
  const { isSignedIn, user, isLoaded } = useUser();
  return { user, isSignedIn, isLoaded };
}
