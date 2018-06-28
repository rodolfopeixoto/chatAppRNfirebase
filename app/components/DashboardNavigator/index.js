import { StackNavigator } from 'react-native';
import ChatScreen from './ChatScreen';

const routeConfig = {
  Chat: { screen: ChatScreen }
}

export default StackNavigator(routeConfig);