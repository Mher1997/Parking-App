import React from 'react';
import { YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setCustomText } from 'react-native-global-props';

import SliderScreen from './components/SliderScreen';
import LoginScreen from './components/LoginScreen';
import SubmitScreen from './components/SubmitScreen';

YellowBox.ignoreWarnings(['Remote debugger']);


class App extends React.Component {

  render(){
    return(
     <AppContainer/>
    )
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Slider: SliderScreen,
    Login: LoginScreen,
    Submit: SubmitScreen
  },
  {
    initialRouteName: 'Slider',
  }
)

const AppContainer = createAppContainer(AppStackNavigator);

const customTextProps = {
  style: {
    fontFamily: 'Roboto',
  }
};

setCustomText(customTextProps);

export default App;