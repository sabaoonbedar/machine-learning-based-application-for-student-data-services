import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import LoginScreen from '../Scenes/AdminLoginScreen';
import Iconn from 'react-native-vector-icons/Ionicons';
import NetInfo from "@react-native-community/netinfo";
import Scanner_Degree from '../Scenes/Scanners/Degree_Panel_Scanner'
import IconEnt from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';

import moment from "moment";
import {connect} from 'react-redux';
import { AsyncStorage } from 'react-native';


import {
  linechart,
  Gender_Pie_Chart,
  Programe_Pie_Chart,
  Verify_Pie_Chart,
  Semester_Pie_Chart,
  Degree_Verify_Pie_Chart,
  Graduated_Line_Chart,
} from '../Redux/Actions'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
  ActivityIndicator,
  Modal,
  ImageBackground,
  Dimensions,
} from 'react-native';

import 'react-native-gesture-handler';

import {
  Toast,
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
  Card,
  CardItem,
  List,
  ListItem,
} from 'native-base';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import ShowConnection from '../Scenes/InternetconnectionScreen'



class DegreeVerifyScreen extends Component {



  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      isLoading: false,
      search: '',
      isVisible:false,
connection_visible: false,
modalVisible:false,
information_modal:false,

show:true,
selected: false,


    };
  }



  





  updateSearch = search => {
    this.setState({search});
  };








modal_error=(value)=>{
  this.setState({connection_visible:value})

}


 
  componentDidMount = async () => {

              this.props.linechart()
              this.props.Gender_Pie_Chart()
              this.props.Programe_Pie_Chart()
              this.props.Verify_Pie_Chart()
              this.props.Semester_Pie_Chart()
              this.props.Degree_Verify_Pie_Chart()
              this.props.Graduated_Line_Chart()
              
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);



      switch(state.isConnected){

case true:
  // return (
  //   Toast.show({
  //     text: "Internet Connected!",
  //     buttonText: "Okay",
  //     type: "success"
  //   }))

case false: 
if(state.isInternetReachable===false){

this.modal_error(true)

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








  setModalVisible = (visible) => {
    

    this.setState({ modalVisible: visible });
  
  }
  
    
  
  
  
  setInformationModalVisible = (visible) => {
    if(this.props.scan_response){
      if(this.props.scan_response.length){
  console.log(this.props.scan_response.length)
    this.setState({ information_modal: visible });
      }else{
   
        Alert.alert('We do not have any information for the scanned barcode in our records')
    
      
        }
  
  }
  
    else{
   
      Alert.alert('There seems some problem in Searching the information')
  
    
      }
  }
  













  showmodal = show =>{

this.setState({isVisible:show});

  }


  hidemodal = hide =>{

    this.setState({isVisible:hide});
    
      }

    
      






  render() {
    const {search,isVisible} = this.state;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    if (this.state.isLoading) {
      return (
        <View
      onresponder
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
            <Text
              style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 20,
              }}>
              Bverify
            </Text>
          </View>
        </View>
      );
    }
    /*<Left>
            <Button transparent onPress={() => this.Back()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>*/
    //header area starts from here*********************************************************************************
    return (


      <Container>




<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.information_modal}
          onRequestClose={() => {
           console.log('close')
          }}
 >


{/* starts from here */}

<View style={{height:windowHeight}}>
    




    {this.props.scan_response!==undefined ? this.props.scan_response.map((item)=>{return(

    
    
    <ImageBackground source={require('../Assets/shap.jpg')} style={{
            resizeMode:"cover",
         height:windowHeight
            }}>
    
   
    <View style={{
      width:windowWidth,
    height:windowHeight,
    flex:1,
    top:'7%',
    }}>
    
    
    

    <View style={{flexDirection:"row"}}>
    <View style={{
                // backgroundColor:'white',
              
          //       borderTopLeftRadius:123,
          // borderBottomRightRadius:123,
                paddingLeft:'4%',
                paddingTop:'2%',
                paddingBottom:'2%',
              
              }}>
                    <Text style={{
                      fontSize:35,
                    textAlign:'left',
                    color:'#364b73',
                    fontWeight:'bold'
                    }}>
                    
    {item.name}
    
               </Text>

               <Text style={{fontSize:16,
                
                textAlign:'left',
                color:'black',
                }}>
                 {item.email_address}
                </Text>

    </View>
    

<View  style={{position:"absolute",top:'8%',right:'10%'}}>
    <TouchableOpacity onPress={()=>{
this.setInformationModalVisible(false);
    }}>
<Text>
<IconEnt name="cross"  color={'#4f83cc'} size={34}/>  
</Text>

</TouchableOpacity>
 
</View>
    


    </View>


    
    <View style={{
     
    width:'96%',
    left:'2%',
    
         borderTopLeftRadius:10,
      height:'32%',
      
    
    }}>
    <ScrollView alwaysBounceVertical>
    
    <Text style={{
      fontSize:24,
    textAlign:'left',
    padding:'2%',
  

   
    }}>

<Text style={{fontWeight:'bold',color:'#364b73'}}>{item.name}</Text> son of <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.father_name}</Text> took admission on the date: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(item.admission_date).format('DD-MM-YYYY')}</Text>  and was successfully able to complete his graduation dated: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(item.graduation_date).format('DD-MM-YYYY')}</Text> and his degree is {item.status} from University of Peshawar.                  

       
      </Text>
    </ScrollView>
    
      </View>
    
    
     
    
    
    
    <View style={{ flex:1, width:'96%',left:'2%'}}>
    
                
    
    <ScrollView>
      
    
    
                    <List>
                   
           
            
    
                <ListItem itemDivider  style={{backgroundColor:item.status=="Verified"||item.status=="verified"?'#364b73':'#750909',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> Admission Details</Text>
                </ListItem> 
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Registration No#:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.registration_num}</Text>
                </Body>
                
                </ListItem>



                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Admission:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{moment(item.admission_date).format('DD-MM-YYYY')}</Text>
                  </Body>
              
                </ListItem>
    
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Graduation:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{moment(item.graduation_date).format('DD-MM-YYYY')}</Text>
                  </Body>
              
                </ListItem>
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Status:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:item.status=="Verified"||item.status=="verified"?'#364b73':'#750909',fontWeight:'bold'}}>{item.status}</Text>
                  </Body>
              
                </ListItem>
  
    

    
    
              </List>
            
    
    
    
              
    
              </ScrollView> 
               
             
    
    </View>
      
    
    
    
    
    </View>
    
    <View></View>
    
    

    
    </ImageBackground>
    
    )}):console.log('Scan response undefined')
    
    
    
    }

    </View>
      
         
  


 </Modal>




 <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
           console.log('close')
          }}

        
      
        >
    
        
<Scanner_Degree
 modalVisible={this.setModalVisible}
informationModal={this.setInformationModalVisible}
/>
            
           
      
        </Modal>

















<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.connection_visible}
          onRequestClose={() => {
            Alert.alert("Please Check your Internet Connection.");
          }}
          >
        

<ShowConnection modal_error={this.modal_error}/>

          
            
        </Modal>






{/* model starts from here */}



<Modal
            animationType = {"slide"}
            transparent={false}
            visible={isVisible}
            onRequestClose={() => this.hidemodal(hide=false)}
            onDismiss={() => this.hidemodal(hide=false)}
           >

<ImageBackground source={require('../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>

<View style={styles.modalbutton}>

<Button transparent onPress={() => this.hidemodal(hide=false)}>
                <Text style={styles.loginButton}>
                
                <Iconn name="md-close-circle-outline" size={25} color="#4f83cc" />


                
                </Text>
              </Button>
             
</View>

<LoginScreen hidemodal={this.hidemodal}/>

 



</ImageBackground>
          </Modal>

{/* model ends here */}



<ImageBackground source={require('../Assets/netww.png')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>

        {/* <Header style={styles.HeaderSearch}>
          <SearchBar
           cancelButtonProps={{
            ...Platform.select({
              ios: {},
              android: {
                color: 'white',
                fontWeight: 'bold',
              },
              default: {
                // other platforms, web for example
              },
            }),
          }}

 containerStyle={{
                    ...Platform.select({
                      ios: {},
                      android: {
                        backgroundColor: null,
                         },
                      default: {
                        // other platforms, web for example
                      },
                    }),
                  }}


            platform="ios"
            cancelButtonTitle="Search"
            showCancel
            //onCancel when you want to call function on cancel
            inputContainerStyle={{backgroundColor: 'white'}}
            placeholder="Search RegistrationNum"
            onChangeText={this.updateSearch}
            value={search}
          />
        </Header> */}

        <Content style={{top:'7%'}}>

          <View style={styles.MainContainer}>
            <View style={styles.ImageContainer}>
              <Image
                source={require('../Assets/tenor.gif')}
                style={{width: 120, height: 90}}
              />
            </View>
            <Card style={{width: '100%'}} transparent>
              <CardItem>
                <Body>
                  <Text style={styles.textbody}>
                    To verify the Degree or Transcript of a person, press on the
                    below button and scan the barcode of the Degree or
                    Transcript or Search by Registration Number.
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <View style={styles.buttonContainer}>
              <Button
                style={styles.buttonvertical}
                onPressIn={() =>{this.setModalVisible(true)}}>
                <Icon name="ios-barcode" />
                <Text style={styles.ButtonText}>Scan</Text>
              </Button>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Button transparent onPressIn={() => Actions.AdminLoginScreen()}>
                <Text style={styles.loginButton}>Login</Text>
              </Button> */}
              <Button transparent onPress={() => {this.showmodal(show=true) }}
              >
                <Text style={styles.loginButton}>Login</Text>
              </Button>
              
            </View>








          </View>


       





        </Content>


        </ImageBackground>
       






      </Container>

      
     
    );
  }
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
 
    resizeMode: 'stretch',
 
  },
  HeaderSearch: {
    paddingBottom: 8,
  },

  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  loginButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0b6fd4',
  },

  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },

  buttonvertical: {
    width: 200,
    backgroundColor: '#4f83cc',
    marginVertical: 45,
    borderRadius: 12,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    elevation: 7,
  },

modalbutton:{

justifyContent:"center",
alignItems:'flex-end',
marginRight:'7%',
marginTop:'17%'

},

  white: {
    fontSize: 14,
    // Define your HEX color code here.
    color: '#FFFFFF',
  },
  icon: {
    // Define your HEX color code here.
    color: '#FFFFFF',
  },

  innerView: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    backgroundColor: '#808080',
  },

  paragraph_Hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  textbody: {
    color: 'gray',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'left',
    paddingHorizontal: 6,
  },

  ButtonText: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 35,
    width: 200,
    color: 'white',
  },
});





const mapStatetoProps = (state)=>{

  const {


  } = state.FormHandler;

  const{
    
    degree_list_Scan_information

  } = state.Crud_Data;


return{

scan_response:degree_list_Scan_information

}

}

export default connect(mapStatetoProps,{linechart,Gender_Pie_Chart,Programe_Pie_Chart,Verify_Pie_Chart,Semester_Pie_Chart,Degree_Verify_Pie_Chart,Graduated_Line_Chart})(DegreeVerifyScreen)