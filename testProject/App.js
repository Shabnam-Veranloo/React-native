
import React, { PureComponent } from 'react';
import {
  View
} from 'react-native';
import MainRouter from './src/navigation/MainNavigation'


export default class App extends PureComponent{

  render(){
    return (

      <MainRouter/>
    
    );
  }
}
