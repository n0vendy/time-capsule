import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Complete() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        your time capsule has been sealed!
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 30 }}>
        we'll remind you to open it in amount of time.
      </Text>
    </View>
  );
}