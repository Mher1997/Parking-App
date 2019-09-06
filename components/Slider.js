import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableHighlight} from 'react-native';

let {height, width} = Dimensions.get('window');

const slides = [
    {
        image : require('../Images/layer3.png'),
        text1 : 'Сотни частных парковок рядом с вами',
        text2 : 'Теперь найти недорогоую парковку стало еще проще',
        buttonText : 'Понятно'
    },
    {
        image : require('../Images/layer1.png'),
        text1 : 'Выбереите ближайшую к вам и забронируйте',
        text2 : 'Первые 15 минут бронирования, чтобы добраться — бесплатно',
        buttonText : 'Понятно'
    },
    {
        image : require('../Images/layer2.png'),
        text1 : 'Ваше время бронирования всегда перед глазами',
        text2 : 'При завершинии парковка останется в вашей истории, чтоб быстро ее найти',
        buttonText : 'Приступить'
    },
];

export default class extends React.Component{
  scrollRef = React.createRef();
  constructor(props){
    super(props);
    this.state = {
        index: 0
    }
  }

  selectSlideIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    this.setState({index})
  }

  callBack = index => {
    this.scrollRef.current.scrollTo({
        animated: true,
        y: 0,
        x : width * index
    })
  }

  scrollToNext = () => {
    this.setState({index : this.state.index + 1}, ()=>this.callBack(this.state.index));
  }

  render() {
    const {index} = this.state;
    return(
    <View style={styles.contanier}>
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            onMomentumScrollEnd={this.selectSlideIndex}
            ref = {this.scrollRef}
        >
            {slides.map((elem, i)=>(
                <View style={{width, height}} key={i}>
                    <View style={styles.skip}>
                        <Text style={{color: '#4fadf9', marginRight: width/12.5, marginTop: 40}} onPress={this.scrollToNext}>Пропустить</Text>
                    </View>
                    <View style={styles.imageContain}>
                        <Image style={styles.image} source={elem.image} />
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={{fontSize: 20, fontWeight: 'bold',textAlign : 'center', width: '80%'}}>{elem.text1}</Text>
                        <Text style={{fontSize: 16, marginTop: height/30, textAlign : 'center', width: '80%'}}>{elem.text2}</Text>
                    </View>
                    <View style={styles.buttonContain}>
                        <TouchableHighlight style={styles.sliderButton} onPress={this.scrollToNext}>
                            <Text style={{color: 'white', fontSize: 17, padding: 6, textAlign: 'center'}}>{elem.buttonText}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            ))}
        </ScrollView>
        <View style={styles.pagination}>
            {slides.map((elem, i)=>(
                <View key={i} style={[styles.paginationElem, {opacity: i === index ? 0.3 : 1}]}/>
            ))}
        </View>

    </View>
    )
  }
}

const flexCenter = {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
}

const styles = StyleSheet.create({
  contanier: {
    width: '100%',
    height: '100%'
  },
  slider: {
    width, 
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: 300
  },
  skip : {
    width, 
    flex: 1,
    alignItems: 'flex-end',
    height: 20
  },
  imageContain: {
      marginTop: height/30,
      ...flexCenter,
  },
  image : {
    width: width/1.55,
    height: width/1.55,
    resizeMode: 'stretch'
  },
  sliderContainer: {
    marginTop: height/10,
    ...flexCenter
  },
  buttonContain: {
    width, 
    height: 40, 
    ...flexCenter
  },
  sliderButton: {
    width: width/2,
    backgroundColor: '#4fadf9',
    borderRadius: 20,
    margin: 'auto',
    height: 40,
    marginBottom: height/10
  },
  pagination: {
    position: 'absolute',
    bottom: 40,
    height: 15,
    width: '100%',
    ...flexCenter,
    flexDirection: 'row',
  },
  paginationElem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    backgroundColor: 'black',
  },
});
