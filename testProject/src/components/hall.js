
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {styles} from '../styles';
import axios from 'axios';


export default class hall extends PureComponent{
  
  constructor(props) {
    super(props);
    this.state = {
      ads:['https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg'],
      listPerson:[]
    };
  }
  
  componentDidMount() {
    
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);


    axios.get(`https://reqres.in/api/users?per_page=5`)
      .then(res => {
        console.log('res',res)
        const persons = res.data;
        this.setState({ listPerson:persons });
      }).catch(error =>alert(error));

    

   
  }

  _renderview=(item)=>{
    var data=item.item
    var index=item.index

    if(index==2){

      return(
        <View style={{justifyContent:'center'}} >
         <Image style={styles.cardStyle} resizeMode='contain'  source={{ uri: 'https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg'}}/>
        </View>
      )
    }
    else{
      return(
        <View style={{justifyContent:'center'}} >
           <Image style={styles.image} resizeMode='contain'  source={{ uri: data.avatar}}/>
        </View>
      ) 
    }

  

  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  
  handleBackPress = () => {

      this.props.navigation.goBack()
  }

  render(){
    console.log('state',this.state.listPerson)
    return (
        <View style={{flex:1}}>
          <View style={styles.header}>
    
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} >
              <Image style={styles.thumbstyle} source={require('../assets/back.png')}/>
            </TouchableOpacity>
            
          </View>

       
            <FlatList
            keyExtractor = { (item, index) => index.toString() }
            data={this.state.listPerson.data}
            renderItem={this._renderview}/>

          
        </View>
    
    );
  }
}


