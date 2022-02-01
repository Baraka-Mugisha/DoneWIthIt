import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
// import { TouchableHighlight } from 'react-native-web';

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} onPress={() => console.log("Text pressed")}>Hello React Native. Today  I am going to make you really really really really long and make the reader tedious to reader</Text>
      {/* <StatusBar style="auto" /> */} 
      <TouchableHighlight>
        <Image
          blurRadius={5}
          loadingIndicatorSource={require('./assets/splash.png')}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableHighlight>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
