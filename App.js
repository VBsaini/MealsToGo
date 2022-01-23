import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthContextProvider } from "./src/services/auth/auth.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzBM8A2NkVTVjlF7r1h2Fn0bj9zc7qbQI",
  authDomain: "mealstogo-86b1e.firebaseapp.com",
  projectId: "mealstogo-86b1e",
  storageBucket: "mealstogo-86b1e.appspot.com",
  messagingSenderId: "881353545080",
  appId: "1:881353545080:web:432fb0045dce6c992c248d",
};
if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return <></>;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
