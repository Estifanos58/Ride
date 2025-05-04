import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        headerShown: false, // This will hide headers for all screens in the stack
      }}
    >
        <Stack.Screen name="welcome" options={{headerShown: false}}/>
        <Stack.Screen name="sign-up" options={{headerShown: false}}/>
        <Stack.Screen name="sign-in" options={{headerShown: false}}/>
    </Stack>
  );
} 