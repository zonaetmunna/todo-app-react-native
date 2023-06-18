import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
      <FlashMessage position="top" floating />
    </SafeAreaProvider>
  );
}
