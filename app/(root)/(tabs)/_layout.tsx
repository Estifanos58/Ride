import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        headerShown: false, // This will hide headers for all screens in the stack
      }}
    >
        <Stack.Screen name="chat" options={{headerShown: false}}/>
        <Stack.Screen name="home" options={{headerShown: false}}/>
        <Stack.Screen name="profile" options={{headerShown: false}}/>
        <Stack.Screen name="rides" options={{headerShown: false}}/>

    </Stack>
  );
} 