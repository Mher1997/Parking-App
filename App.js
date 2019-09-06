import React from 'react';
import { YellowBox, View, StyleSheet } from 'react-native';
import Slider from './components/Slider';
YellowBox.ignoreWarnings(['Remote debugger']);

class App extends React.Component {
  render(){
    return(
      <View>
        <Slider/>
        <View style={{width: '100%', position: 'absolute', bottom: 7, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.blackLine}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  blackLine: {
    height: 5, 
    width: 135,
    backgroundColor: 'black', 
    borderRadius: 3,
  }
})

export default App;