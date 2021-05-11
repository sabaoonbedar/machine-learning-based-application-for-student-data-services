import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

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
} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class SplashScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {


      isConnected: true


    };
  }

 

  componentDidMount = async () => {
  
    let didVisit = await AsyncStorage.getItem('Only_Visit_Once');
    let userToken = await AsyncStorage.getItem('userToken');

    setTimeout(() => {
      // console.log(didVisit)
      if(userToken){
        
Actions.replace('AdminPanel')

      }else if(didVisit)
      
      Actions.replace('DegreeVerifyScreen')

      else{
      Actions.replace('WelcomeScreen');
      }
    },900);
  };


  componentWillUnmount() {

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
          <Image
            source={require('../Assets/logowhitebverify.png')}
            style={{width: 200, height: 200}}
          />
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
backgroundColor:"#4f83cc",
opacity:1,
 },

  imagecontainer: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',

    justifyContent: 'center',
  },
});
