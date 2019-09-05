import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Button } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

let {height, width} = Dimensions.get('window');

export default class extends React.Component{
  

  constructor(props){
    super(props);
    this.state = {
      carouselItems : [
        {
          path : 'asset:/1.jpg',
          text : '1'
        },
        {
          path : 'asset:/2.jpg',
          text : '1'
        }
      ],
      activeIndex : 0
    }
  }

  get pagination () {
    const { carouselItems, activeIndex } = this.state;
    return (
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
  }

  _renderItem = ({item, index}) => (
    <View style={{width, height: 200, flex: 1, justifyContent: 'center'}}>
      <Image source={{uri : 'asset:/images/1.jpg'}} style={{width, height: 200,}}/>
    </View>
  )

  onPress = () => this._carousel.snapToNext();

  render(){
    return (
        <View style={styles.contanier}>
          <Button title="CLick" onPress={()=>this.onPress()}/>
          <Carousel
            ref = { ref => this._carousel = ref }
            data = {this.state.carouselItems}
            renderItem = {this._renderItem}
            sliderWidth = {width}
            itemWidth = {width}
            itemHeight = {1}
            onSnapToItem = {index => this.setState({ activeIndex: index }) }
          />
          { this.pagination }
        </View>
    );
  }
}


const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
