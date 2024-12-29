import Stack from "@/components/ui/Stack";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          title: "React Scan",
          headerLargeTitle: true,
        }}
      >
        <Stack.Screen
          name="ext-guide"
          options={{
            title: "Instructions",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
