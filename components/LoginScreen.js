import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native';
import { BlueButton } from '../Helper';

let {height, width} = Dimensions.get('window');

class LoginScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: '',
        open: 'false'
      }
    }

    static navigationOptions = {
        header: null
    }

    render(){
        const {open, value} = this.state;
        const {navigate} = this.props.navigation;
        return(
            <View style={{width, height, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width, flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: height/8}}>
                    <Image style={styles.image} source={require('../Images/login.png')}/>
                    <View style={[styles.textInputContain, {marginBottom: open===true ? 10 : height/13}]}>
                        <Text style={{fontSize: 12, color: '#415a69'}}>Телефон</Text>
                        <TextInput
                            style={styles.textInput}
                            value={this.state.value}
                            onChangeText={value=>this.setState({value})}
                            placeholder='+7 904 446 35 16'
                            keyboardType='phone-pad'
                            onFocus={()=>this.setState({open: true})}
                            onBlur={()=>this.setState({open: false})}
                        />
                    </View>
                    <BlueButton 
                        style={{width: '50%'}} 
                        onPress={()=>{
                            value.length>0 && navigate('Submit', {
                                otherParam: value
                            })
                        }} 
                        buttonText='Войти'
                    />
                </View>
                <View style={{width: '100%', position: 'absolute', bottom: 7, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 5, width: 135,backgroundColor: 'black', borderRadius: 3}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: width/2.4,
        height: width/2.4,
        resizeMode: 'stretch'
    },
    textInputContain: {
        marginTop: height/15,
        width: '80%',
    },
    textInput: {
        borderBottomWidth: 1, 
        borderBottomColor: '#e9e9e9',
        height: 40
    }
})

export default LoginScreen;