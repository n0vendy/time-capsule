import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const questions = [
  { text: "What's your name?", type: "text" },
  {
    text: "Pick a favorite color:",
    type: "multiple",
    options: ["Red", "Blue", "Green", "Purple"],
  },
  {
    text: "How are you feeling today?",
    type: "slider",
    min: 0,
    max: 10,
  },
];

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(5);
  const router = useRouter();

  const question = questions[index];

  const handleNext = () => {
    let answer;
    if (question.type === "text") answer = inputValue;
    else if (question.type === "multiple") answer = selectedOption;
    else if (question.type === "slider") answer = sliderValue;

    setAnswers([...answers, answer]);
    setInputValue("");
    setSelectedOption("");
    setSliderValue(5);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("All answers:", answers.concat(answer));
      router.push("/complete" as any);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{question.text}</Text>

      {question.type === "text" && (
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            borderRadius: 6,
          }}
          placeholder="type your answer..."
          value={inputValue}
          onChangeText={setInputValue}
        />
      )}

      {question.type === "multiple" &&
        question.options?.map((opt: string) => (
          <Pressable
            key={opt}
            onPress={() => setSelectedOption(opt)}
            style={{
              padding: 10,
              marginVertical: 6,
              backgroundColor: selectedOption === opt ? "#cce" : "#eee",
              borderRadius: 6,
            }}
          >
            <Text>{opt}</Text>
          </Pressable>
        ))}

      {question.type === "slider" && (
        <>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={question.min}
            maximumValue={question.max}
            step={1}
            value={sliderValue}
            onValueChange={setSliderValue}
          />
          <Text style={{ textAlign: "center" }}>{sliderValue}</Text>
        </>
      )}

      <Button
        title="submit"
        onPress={handleNext}
        disabled={
          (question.type === "text" && inputValue.trim() === "") ||
          (question.type === "multiple" && selectedOption === "")
        }
      />
    </View>
  );
}