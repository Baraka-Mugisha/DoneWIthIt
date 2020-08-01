import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <Text onPress={() => console.log("my test")}>Hello World!</Text>
      <TouchableOpacity>
        <Image
          blurRadius={10}
          fadeDuration={2000}
          source={{
            uri: "https://picsum.photos/200/300",
            width: Dimensions.get("window").width,
            height: 300,
          }}
        />
      </TouchableOpacity>
      <Button
        color="orange"
        title="Click here"
        onPress={() =>
          Alert.prompt("pressed", "title", (text) => console.log(text))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
