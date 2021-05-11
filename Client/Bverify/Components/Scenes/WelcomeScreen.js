import React, {Component} from 'react';
import {connect} from 'react-redux'
import NetInfo from "@react-native-community/netinfo";
import { AsyncStorage } from 'react-native';

//import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation'
//import {Platform} from 'react-native';

//import Swiper from 'react-native-swiper-animated';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  CardItem,
  Card,
  Toast,
} from 'native-base';

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
  SafeAreaView,
} from 'react-native';

import Swiper from 'react-native-web-swiper';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';

import {internet_connection} from '../Redux/Actions'







 class WelcomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {

      isLoading:false,

    };


  }






  componentDidMount = async ()=>{

const didVisit = 'didVisit'

    await AsyncStorage.setItem('Only_Visit_Once', didVisit);
    

  }

  componentWillUnmount(){

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
      );}



    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../Assets/logoverify.png')}
            style={{width: 200, height: 100}}
          />
        </View>
        <Container>
          <Swiper
            from={0}
            // loop//for looping
            // for time out automatic sliding

            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              //prevPos: 'left',
              //nextPos: 'right', //for adding buttons (next and prev) to the center of the screen
              // dotActiveStyle: { backgroundColor: 'red' }, //for changing dot color

              /*cellsContent: {
                    'top': (<Text>my name is khan</Text>),} for typing text on the above screen or anywhere
                }*/
            }}>
            <View style={[styles.slideContainer, styles.slide1]}>
              <ScrollView style={styles.mainViewStyle}>
                <View style={styles.mainViewStyle}>
                  <Card transparent>
                    <CardItem header>
                      <Text style={styles.headerfont}></Text>
                    </CardItem>

                    <CardItem>
                      <Body>

                      <View style={{justifyContent:"center",alignItems:"center", marginLeft: '17%',marginTop:'-6%'}}>
                        <Image
            source={require('../Assets/verifyimage.png')}
            style={{width: 255, height: 240,}}
          /></View>


                        <Text style={{fontSize:16}}>
                        
                        {'\n'} {'\n'}
                        <Text style={{fontSize:28,color:'#364b73',textAlign:'center',fontWeight:'bold',}}>Scan a barcode to verify </Text> 
                          {'\n'} {'\n'}
                          
                          <Text>To verify student you need to tap on <Text style={{fontWeight:"bold",fontSize:18}}>scan</Text> and then you have to scan the barcode, after scanning you will get the information of that person.</Text>
                         
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer style={styles.footerstyle}>
                      <Button
                        transparent
                        onPress={() => Actions.DegreeVerifyScreen()}>
                        <Text style={styles.skipbutton}>{'Skip >'}</Text>
                      </Button>
                    </CardItem>
                  </Card>
                </View>
              </ScrollView>
              <View />
            </View>

            <View style={[styles.slideContainer, styles.slide2]}>
              <ScrollView style={styles.mainViewStyle}>
                <View style={styles.mainViewStyle}>
                  <Card transparent>
                    <CardItem header>
                      <Text style={styles.headerfont}></Text>
                    </CardItem>

                    <CardItem>
                      <Body>
                      <View style={{justifyContent:"center",alignItems:"center", marginLeft: '17%',marginTop:'-6%'}}>
                        <Image
            source={require('../Assets/imageverify2.png')}
            style={{width: 255, height: 240,}}
          /></View>


                        <Text style={{fontSize:16}}>
                        
                        {'\n'} {'\n'}
                        <Text style={{fontSize:28,color:'#364b73',textAlign:'center',fontWeight:'bold',}}>Generate a barcode </Text> 
                          {'\n'} {'\n'}
                          
                          <Text>To generate barcode you need to <Text style={{fontWeight:"bold",fontSize:18}}>scan</Text> hand written text or any other text, after scanning you will get list of recognised texts, select a word from the list and generate a barcode</Text>
                      
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer style={styles.footerstyle}>
                      <Button
                        transparent
                        onPress={() => Actions.DegreeVerifyScreen()}>
                        <Text style={styles.skipbutton}>{'Skip >'} </Text>
                      </Button>
                    </CardItem>
                  </Card>
                </View>
              </ScrollView>
              <View />
            </View>
          </Swiper>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  slide1: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  slide2: {
    backgroundColor: 'rgb(255, 255, 255)',
  },



  mainViewStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },


  headerfont: {
    color: 'grey',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '34%',
    justifyContent: 'center',
  },

  footerstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },


  imagecontainer: {
    flex: 0,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  

  skipbutton: {
    fontSize: 16,
    color: '#364b73',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#364b73',
    width: 100,
    paddingLeft: 30,
    paddingTop: 2,
  },
});


const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;
 const {isConnected, notConnected} = state.Connection;
return{

  online:isConnected,
  

}

}



export default connect(mapStatetoProps,{internet_connection}) (WelcomeScreen);