import { router } from 'expo-router';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//UX FILE - IMMEDIATELY CONTROLS UI
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your name?</Text>
      
      <View> 
        <TextInput placeholder="Enter your name"
        />
      </View>
      <Button
        title="Start"
        onPress={() => router.push("/questions")} // navigate to questions.tsx
      />

    </View>
  );
}

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
