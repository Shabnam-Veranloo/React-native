import React, {PureComponent,Fragment} from 'react';
import {FirstVisit,showHelpPage} from '../database/realm';
import Realm from 'realm';
import hall from '../components/hall';
import welcom from '../components/welcom';
import intro from '../components/intro';
import { createStackNavigator,createSwitchNavigator,createAppContainer } from 'react-navigation';

console.disableYellowBox = true;

    const StackRout = createStackNavigator({
        hall:{screen:hall, navigationOptions:{gesturesEnabled: false,}},
        welcom:{screen:welcom, navigationOptions:{gesturesEnabled: false,}},
    },
    {
        initialRouteName: "welcom",//RootStack
        headerMode:"none",
    })
    
    const SwitchRout=createSwitchNavigator({
        StackRout:{screen:StackRout},
        intro:{screen:intro},
      
    },
    {
      initialRouteName: "intro",//SplashScreen
      headerMode:"none",
    })

   


const FistVisitMainRout = createAppContainer(SwitchRout);
const MainRout = createAppContainer(StackRout);


 
class MainRouter extends React.PureComponent {



  render() {

    let realm = new Realm({schema: [FirstVisit]});

    var visit = realm.objects('firstVisit')
    console.log('visit', visit[0])
   
   

    return(

        

        <Fragment>
        
            {visit[0]!=undefined
            
            ?<MainRout
            navigation={this.props.navigation}
            />

            :<FistVisitMainRout
            navigation={this.props.navigation}
            />

            }
           
        </Fragment>
       
        
    );

  }

 
}

export default MainRouter;

