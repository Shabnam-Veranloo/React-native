import React from 'react';
import {View,Text,Image,Dimensions,StyleSheet,I18nManager } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FirstVisit} from '../database/realm';
import Realm from 'realm';
import {styles} from '../styles'


var { width, height } = Dimensions.get("window");




var  slides = [
  {
    key: 'firstIntro1',
    title: 'welcom page',
    text: 'in this page show gif animations',
    image: require('../assets/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    icon: 'ios-images-outline',
    colors: ['#f15a29', '#f58220'],


  },
  {
    key: 'firstIntro2',
    title: 'Hall page',
    text: 'we have Hall page that show famuse people',
    image: require('../assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#64b5f6',
    colors: ['#1b75bc', '#27aae1'],

  },
 
];

 class FirstIntro extends React.Component {
     
  constructor(props) {
    super(props);
   
  }

  _onDone = () => {
    this.props.navigation.navigate('welcom')

  }
  _onSkip =() =>{

    this.props.navigation.navigate('welcom')

  }

  componentDidMount(){
    
    let realm = new Realm({schema: [FirstVisit]});
    
    realm.write(() => {
      var setvisit = realm.create('firstVisit', {
          firstvisit:true,
      });             
    });
   
    
   
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderSkipButton = () => {
    return (
      <View style={styles.roundButton}>
        <Text style={styles.skipStyle}>skip</Text>
      </View>
    );
  }

  _renderItem = (item) => {
    return (
      <LinearGradient
      style={[styles.mainContent, {
        paddingBottom: item.bottomSpacer,
        width: item.item.width,
        height: item.item.height,
      }]}
      colors={item.item.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
      >
        <Image style={{width:wp(100),height:wp(50)}} resizeMode="contain" source={item.item.image}/>

        <View>
          <Text style={styles.title}>{item.item.title}</Text>
          <Text style={styles.textStyle}>{item.item.text}</Text>
        </View>

      </LinearGradient>
    );
  }

 
  render() {
      return  (
        <AppIntroSlider
          slides={slides}
          showSkipButton={true}
          skipLabel= {'skip'}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderSkipButton={this._renderSkipButton}
          renderItem={this._renderItem}
          onDone={this._onDone}
          onSkip={this._onSkip}
        />
      );
  }
}

export default FirstIntro

