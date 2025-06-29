import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import SafeScreen from "@/components/SafeScreen";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
	return (
		<SafeScreen>
			<ClerkProvider tokenCache={tokenCache}>
				<Slot />
			</ClerkProvider>
			<StatusBar style="dark" />
		</SafeScreen>
	);
}
