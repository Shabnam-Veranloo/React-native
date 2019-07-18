import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import{Platform} from 'react-native'

 export var styles={
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
      },
      buttonStyle: {
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: wp(5),
        paddingLeft: 10,
        paddingRight: 10
      },
      cardStyle: {
        borderWidth: 1,
        width:wp(90),
        height:wp(80),
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
      },
      mainContent: {
        flex: 1,
        alignItems: 'center',
       
      },
    
      buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      roundButton:{
        height: wp(12),
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: wp(50),
        height: wp(50),
        margin: wp(10),
      },
    
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
        fontFamily: 'Roboto'
      },
      title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
        fontFamily:  'Roboto-Bold'
      },
      skipStyle: {
        fontFamily:  'Roboto', 
        fontSize: wp(4), 
        color: '#fff',
        marginHorizontal: wp(3)
      },
      inputText:{
        width: wp(60),
        height: Platform.OS == 'ios'? wp(10): null,
        borderRadius: wp(5),
        marginHorizontal: wp(1.5),
        borderColor: '#42424270',
        borderWidth: 0.5,
        paddingHorizontal: wp(3),
        fontFamily:'Roboto'
      },
      thumbstyle:{
        width:wp(8),
        height:wp(8),
        margin: wp(5),
      },
      header:{
        width:wp(100),
        backgroundColor:'#cacaca',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Platform.OS == 'ios'? wp(18): wp(16),
      }
}