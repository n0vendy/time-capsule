//index.tsx is initial route

import { StyleSheet, Text, View } from "react-native";
//UX FILE - IMMEDIATELY CONTROLS UI
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Time Capsule!</Text>
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
  }
}); //behaves like css