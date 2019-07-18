
import React, { PureComponent } from 'react';
import {
  View,
  Image,
  TextInput,
  BackHandler,
  TouchableOpacity
} from 'react-native';
import {styles} from '../styles';
import shuffleSeed from 'shuffle-seed'
import { Button } from './common/button';


var giftList=[
  require('../assets/gif1.gif'),
  require('../assets/gif2.gif'),
  require('../assets/gif3.gif'),
  require('../assets/gif4.gif'),
  require('../assets/gif5.gif'),
]
var listNumber=['1','2','3','4','5','6','7','8','9']
export default class welcom extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      animation: giftList[0],
      counter:0,
      number:'1',
      backClickCount: 0
      };
  }


  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.timer = setInterval(this.updateAnimation, 5000);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  
  handleBackPress = () => {

    if(this.state.backClickCount == 1){
      BackHandler.exitApp()
    }
    else{
      this.setState({backClickCount: 1})

      setTimeout(() => {
        this.setState({
          backClickCount: 0
        });
      }, 1000);
      
    }
    
    return true
  }


  changeAnimation=()=>{
    giftList=shuffleSeed.shuffle(giftList,this.state.number);
  }
  Randomise=()=>{
    listNumber=shuffleSeed.shuffle(listNumber,7);
    this.setState({number:listNumber[7]})
  }

  updateAnimation=()=>{
    if(giftList.length-1==this.state.counter){
      this.setState({
        animation: giftList[0],
        counter:0
      })
    }
    else{
      this.setState({
        animation: giftList[this.state.counter+1],
        counter:this.state.counter+1
      })
    }    
  }

  render(){
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('hall')}} >
            <Image style={styles.thumbstyle} source={require('../assets/back.png')}/>
          </TouchableOpacity>
          
        </View>
       <View style={styles.container}>

         <Image 
             source={this.state.animation}  
             style={styles.image} 
         />

         <TextInput
         underlineColorAndroid ='transparent'
         style={styles.inputText}
         defaultValue={this.state.number}
         keyboardType={'numeric'}
         placeholderTextColor='#42424270'
         placeholder={'Enter a number'}
         returnKeyType='done'
         onChangeText={(number) => this.setState({number:number})}
         />

         

         <Button onPress={this.changeAnimation}>save</Button>

         <Button onPress={this.Randomise}>Randomise</Button>

       </View>
   
      </View>
    );
  }
}


