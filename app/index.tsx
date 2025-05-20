//index.tsx is initial route

import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
const router = useRouter();
//UX FILE - IMMEDIATELY CONTROLS UI
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Time Capsule!</Text>
      <Button
        title="Start"
        onPress={() => router.push("/questions")} // navigate to questions.tsx
      />
    </View>
  );
}
//edit between text tags to change name

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdf0d5',
    borderColor: '#b5838d',
    borderWidth: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#003049',
    marginBottom: 20,
  }
}); //behaves like css