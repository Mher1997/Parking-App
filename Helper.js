import React from 'react';
import { Text,  TouchableHighlight} from 'react-native';

export const BlueButton = props => (
    <TouchableHighlight style={[props.style, {backgroundColor: '#4fadf9', borderRadius: 20, height: 44}]} onPress={props.onPress}>
      <Text style={{color: 'white', fontSize: 17, padding: 9, textAlign: 'center'}}>{props.buttonText}</Text>
    </TouchableHighlight>
)