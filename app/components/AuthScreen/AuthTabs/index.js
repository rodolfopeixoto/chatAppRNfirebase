import { TabNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import SignUpFrom from './SignUpFrom';

const routeConfigs ={
  Login: {
    screen: LoginFrom,
  },
  SignUp: {
    screen: SignUpFrom,
  }
}

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#fff',
    },
  },
  tabBarPosition: 'bottom'
}

export default TabNavigator(routeConfigs, tabBarOptions);