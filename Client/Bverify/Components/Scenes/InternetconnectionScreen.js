import React, {Component} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {internet_connection,connect_once} from '../Redux/Actions'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  image,
  TouchableHighlight
} from 'react-native';

import 'react-native-gesture-handler';

import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Subtitle,
  Title,
  Item,
  Input,
  Button,
  Footer,
  FooterTab,
  Badge,
  Toast
} from 'native-base';

import {Actions} from 'react-native-router-flux';


















class InternetconnectionScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {


      
connection_Status:false,

    };
  }





 
  componentDidMount = async () => {


  
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);



      switch(state.isConnected){

case !true:
  return (
  Actions.pop()
    )

case false: 
if(state.isInternetReachable===false){
// return(

//   Toast.show({
//     text: "No Internet Connection !",
//     buttonText: "Okay",
//    duration:2000,
//   })
// )
}

default:
  return console.log('not working')

}
      

  


      })

  };








    
try_button=()=>{
  
  console.log(this.props.online)
if(this.props.online==true){
  this.props.modal_error(false)
}else(
  Alert.alert('Whoops !', 'Please check your internet connection')
)


}





componentDidMount=()=>{

this.props.internet_connection()

}


componentWillUnmount=()=>{



}



  render() {




    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 7,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderwidth: 1,
              marginBottom: -170,
            }}>
            <Image
              source={require('../Assets/loaderblack.gif')}
              style={{width: 56, height: 56}}
            />
            <Image
              source={require('../Assets/loadingText.gif')}
              style={{width: 70, height: 21, marginTop: 15}}
            />
          </View>

          <View
            style={{
              flex: 2,
              justifyContent: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 20}}>
              Bverify
            </Text>
          </View>
        </View>
      );
    }






    return (
      <Container style={styles.backgroundcolor}>
        <View  style={styles.imagecontainer}>
          {/* <Image
            source={require('../Assets/connection.png')}
            style={{width: 140, height: 140}}
          /> */}
          
        <IconMat name={'wifi-off'} size={100} color={'#364b73'} />


<Text style={{color:'white',fontWeight:'bold', fontSize:30,padding:10}}>
No Internet Connection !
</Text>

<Text style={{color:'white', fontSize:20,paddingBottom:10}}>You are not connected to the internet.</Text>
<Text style={{color:'white', fontSize:20, width:'70%',textAlign:"center"}}>Make sure Wi-Fi is on, Airplane Mode is off and try again.</Text>

<TouchableHighlight
onPress={()=>{

this.try_button()
}}

                style={{  backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2, backgroundColor: "white", marginTop:'14%' }}>


                <Text style={styles.textStyle}>Try Again</Text>
              </TouchableHighlight>



  </View>

  <View>

  
  </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

 backgroundcolor:{
backgroundColor:"#1c8adb",
 },

 openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },

  imagecontainer: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',

    justifyContent: 'center',
    marginBottom:'45%'
  },
});

const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;
 const {isConnected, notConnected,connect_once} = state.Connection;
return{

  online:isConnected,
  offline:notConnected,
active:connect_once,
}

}



export default connect(mapStatetoProps,{internet_connection,connect_once}) (InternetconnectionScreen);