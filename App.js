import { Text, TextInput, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const [firstName, setFirstName] = useState("")
  return (
    <Screen>
      <Text></Text>
      <TextInput
        placeholder='first name'
        keyboardType='numeric'
        onChangeText={(text) => setFirstName(text)}
        clearButtonMode="always"  // Only works for iOS
        secureTextEntry={true}  //password input box
      />
    </Screen>
  );
}
