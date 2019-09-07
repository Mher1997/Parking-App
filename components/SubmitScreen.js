import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text, TextInput} from 'react-native';
import { BlueButton } from '../Helper';

let {height, width} = Dimensions.get('window');

class LogoTitle extends React.Component {
    render() {
      return (
        <Image style={{width: 20, height: 20}} source={require('../Images/arrow.png')}/>
      )
    }
  }


class SubmitScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          value: '',
          timer: 100
        }
    }

    static navigationOptions = ({ navigation }) => {
        const {params} = navigation.state;
        
        return {
            headerTintColor: '#696969',
            headerTitleStyle: {
                fontSize: 16,
                textAlign: "center", 
                flex: 1 ,
                marginRight: width/6,
            },
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
            },
            title: navigation.getParam('phone', params.otherParam)
        };
    };

    timer = () => {
        const {timer} = this.state;
        this.setState({timer: timer - 1});
    }

    componentDidMount(){
        this.timerInterval = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }
    
    render(){
        const {timer} = this.state;
        if(timer===0){clearInterval(this.timerInterval)}
        return(
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: height/20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Введите код{"\n"} из смс для входа</Text>
                <View style={{width: '60%', margintop: height/10, marginBottom: 30}}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.value}
                        onChangeText={value=>this.setState({value})}
                        keyboardType='numeric'
                        maxLength={4}
                        caretHidden
                    />
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../Images/border.png')} 
                            style={{width: '90%', height: 5, resizeMode: 'contain',  margin: 'auto', top: -10}}
                        />
                    </View>
                </View>
                <BlueButton  style={{width: '50%'}} buttonText='Подтвердить'/>
                <Text style={{color: '#696969', fontSize: 16, marginTop: height/10, marginBottom: 15}}>Не получили код?</Text>
                <Text style={{color: '#4fadf9', fontSize: 14, opacity: 0.5}}>Отправить еще раз</Text>
                <Text style={{color: '#415a69', fontSize: 12, opacity: 0.5}}>{timer} секунд</Text>
                <View style={{width: '100%', position: 'absolute', bottom: 7, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 5, width: 135,backgroundColor: 'black', borderRadius: 3}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 50,
        width: '100%',
        fontSize: 54,
        letterSpacing: 20,
        paddingLeft: 6   
    },
    inputBorder: {
        width: '20%',
        backgroundColor: 'blue',
        height: 2,
    }
})

export default SubmitScreen;