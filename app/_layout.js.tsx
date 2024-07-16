// navigation.tsx
import { Stack } from "expo-router";
import store from "./store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(59 130 246 / 0.5)",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="detail/[id]" options={{ title: "Details" }} />
      </Stack>
    </Provider>
  );
}
