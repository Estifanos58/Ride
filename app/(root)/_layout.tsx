import { Stack } from "expo-router";

export default function RootLayout() {

    return (
    <Stack
        screenOptions={{
        headerShown: false, // This will hide headers for all screens in the stack
        }}
    >
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="find-ride" options={{headerShown: false}}/>
        <Stack.Screen name="confirm-ride" options={{headerShown: false}}/>
        <Stack.Screen name="book-ride" options={{headerShown: false}}/>

    </Stack>
    );
} 