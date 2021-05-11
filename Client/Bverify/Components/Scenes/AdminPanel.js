
 /*{Platform.OS === 'android' ? 

 <Scene key="History" component={History} title="History"/>
:
 //Type replace is used to disable back swipe in IOS device
 <Scene key="History" component={History} title="History" />
}*/


import {connect} from 'react-redux';
import React, {Component} from 'react';
import Sidebar from "../Drawer/Sidebar"
import { AsyncStorage } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import ShowConnection from '../Scenes/InternetconnectionScreen'

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
  TouchableOpacityBase,
  ImageBackground,
Platform,
RefreshControl,
Modal,
Dimensions
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
  Card,
  CardItem,
  Form,
Drawer,
Label,

} from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontiso from 'react-native-vector-icons/Fontisto';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView, TouchableHighlight, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  linechart,
  Programe_Pie_Chart,
  Gender_Pie_Chart,
  Verify_Pie_Chart,
  Semester_Pie_Chart,
  Degree_Verify_Pie_Chart,
  Graduated_Line_Chart,
  fee_students_list,
  listData,
  internet_connection,
  Authentication,
  

} from '../Redux/Actions'



 class AdminPanel extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      connection_visible: false,
      modalVisible: false,

      isLoading:false,
      isDrawerOpen:false,
    };
  }





  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }



  modal_error=(value)=>{
    this.setState({connection_visible:value})
  
  }


get_Credentials = async ()=>{

const email = await AsyncStorage.getItem('email')
const password = await AsyncStorage.getItem('password')

this.props.Authentication(email,password)

}


set_role= async ()=>{
if(this.props.Authentication_Response){
const role = this.props.Authentication_Response.information.map(item=>{return item.roles});

await AsyncStorage.setItem('Role',role.toString());

}else{
  console.log('role is not set due to no data')
}


}






//for the loader when you drage it down
wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


 onRefresh = () => {
  this.setState({setRefreshing:true});


 
 this.wait(2000).then(() => {
  this.setState({setRefreshing:false})
//  this.props.listData();
//  this.setState({data:this.props.alumni_data})
//for refreshing the current scene
  Actions.refresh({key: Math.random()})
 
}
 );

}
// ends here




draweropen = open =>{
if(open==true)
Actions.drawerOpen()

}


  

  componentDidMount = async () => {






const unsubscribe = NetInfo.addEventListener(state => {
  // console.log("Connection type", state.type);
  // console.log("Is connected?", state.isConnected);



  switch(state.isConnected){

case true:


case false: 
if(state.isInternetReachable===false){

this.modal_error(true)

}

default:
return console.log('not working')

}
  




  })














  setTimeout(() => {
    this.get_Credentials()

  },400);


setTimeout(() => {
  this.set_role()
}, 200);

const userToken = 'AccessGranted'
await AsyncStorage.setItem('userToken',userToken);

this.props.linechart()
this.props.Gender_Pie_Chart()
this.props.Programe_Pie_Chart()
this.props.Verify_Pie_Chart()
this.props.Semester_Pie_Chart()
this.props.Degree_Verify_Pie_Chart()
this.props.Graduated_Line_Chart()

  this.props.fee_students_list()
  this.props.internet_connection()
  this.props.listData()
  
  };


headerfunction(){

if(Platform.OS == 'ios'){
return(
  <View>
  <Header transparent>
  <Left><Button transparent onPress={()=> Actions.drawerOpen()}>
      <Icon name='menu' />
    </Button>
   
  </Left>
  <Body>
    <Title style={{fontSize:14}}>Admin Panel</Title>
  </Body>
  <Right>
  <Button transparent onPress={()=>{

this.setModalVisible(true)

  }}>
      <Icon name='ios-glasses'/>
    </Button>
  </Right>


</Header></View>

)


}else{




  return(
    <Header style={styles}>
    <Left><Button transparent onPress={()=> Actions.drawerOpen()}>
        <Icon name='menu' />
      </Button>
     
    </Left>
    <Body>
      <Title style={{fontSize:14}}>Admin Panel</Title>
    </Body>
    <Right>
    <Button transparent onPress={()=>{

this.setModalVisible(true)

  }}>
        <Icon name='ios-glasses'/>
      </Button>
    </Right>
  
  
  </Header>
  
  )



}



}



//functions for drawer************************


//********************************************** */


  render() {
   
    const { height, width } = Dimensions.get('window');
   
    //remember you can use this same thing for platform === ios or android by returning two different views
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
    

    //header area starts from here*********************************************************************************
    return (

      
      <Container>


<Modal
          animationType="fade"
          transparent={false}
          visible={this.state.connection_visible}
          onRequestClose={() => {
            console.log('closed');
          }}
          >
        

<ShowConnection modal_error={this.modal_error}/>

          
            
        </Modal>


   
<ImageBackground source={require('../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>


{this.headerfunction()}

      
      <View>


<View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible:false})
          
          }}
        >
       
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
   The Bverify is having all the features, you can recognise text,generate dynamic barcodes in unique text recognition mechanism and trained models, search for current enroll students, you can check the stats of the universities or departments,you can search for the graduated students, you can check the status of verification and search for the students who have outstandings. Moreover you can recognise text and by that recognised text you can search for students who are enroll in the department.

              </Text>


{ Platform.OS == 'ios' ?

<View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Okay</Text>
              </TouchableHighlight>
</View>

:

 <View>
              <Button
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Okay</Text>
              </Button>
</View>




}
            </View>
          </View>

          <View style={{position:'absolute',top:height/4.0,justifyContent:'center',alignSelf:'center',}}>
          <Image
            source={require('../Assets/Splashlogo.png')}
            style={{width: 60, height: 60}}
          />
          {/* <Text style={styles.textwithLogo}>Bverify</Text> */}
        </View>


        </Modal>
</View>
    </View>



<Content     
//  refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
          >

  <View>
  {/* <ImageBackground source={require('../Assets/tech.png')} style={styles.image}> */}

<View style={styles.maincontainer}>


<View style={styles.columncontainer}>


<View style={styles.rowcontainer}>

<TouchableOpacity style={styles.TouchableStyle} onPress={()=>Actions.jump('CurrentStudents')}>

<Icon name="ios-contacts" style={styles.ionicicon} ></Icon>

<Text style={styles.textinMenu}>Current Students</Text>

</TouchableOpacity>


<TouchableOpacity style={styles.TouchableStyle}  
onPress={
  ()=>{Actions.jump('AlumniSystem');
  }
}>
<Icon name="md-paper" style={styles.ionicicon} ></Icon>

<Text style={styles.textinMenu}>Alumni System</Text>


</TouchableOpacity>





</View>



<View style={styles.rowcontainer} >

<TouchableOpacity 
style={styles.TouchableStyle} 

onPress={()=>Actions.jump('FeeVerifierTabs')}
>

<IconFontiso name="money-symbol" style={styles.vectormenu}  />


<Text style={styles.vectormenutext}>Fee Verifier</Text>


          
</TouchableOpacity>


<TouchableOpacity style={styles.TouchableStyle} onPressIn={()=> Actions.jump('TextRecogniser')} >


<IconCommunity name="text-shadow" style={styles.vectormenu} />


<Text style={styles.textinMenu}> Recogniser</Text>



</TouchableOpacity>




</View>






<View style={styles.rowcontainer} >

<TouchableOpacity 
style={styles.TouchableStyle} 

onPress={()=>{
  Actions.StatesScreen();
}}
>

<Icon name="ios-stats" style={styles.ionicicon} ></Icon>

<Text style={styles.textinMenu}>Statistics</Text>


          
</TouchableOpacity>


<TouchableOpacity style={styles.TouchableStyle}  onPressIn={()=> Actions.jump('DegreeVerifyTabs')} >


<IconMaterial name="verified-user" style={styles.vectormenu} />

<Text style={styles.vectormenutext}>


Degree Verifier

</Text>



</TouchableOpacity>




</View>





</View>

</View>



</View>





</Content>


{/* 
<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'#4f83cc',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       position: 'absolute',                                          
       bottom: 70,                                                    
       right: 33,
       height:70,
       backgroundColor:'#fff',
       borderRadius:100,
       shadowOpacity:1,
      shadowRadius:1,
shadowColor:"#414685",
       shadowOffset: {
          width: 1,
          height: 5.5,
        },
        elevation: 6,
    
     }}
 >
                   <IconAnt name="addusergroup" size={43} color= '#364b73' />
  </TouchableOpacity>
 */}



</ImageBackground>


      </Container>
     
    );
  }
}

const styles = StyleSheet.create({





  image: {
    flex: 1,
 
    resizeMode: 'cover',
 
  },

  Contentbacground:{
   backgroundColor:"hsl(0, 0%, 99%)",

  },

maincontainer:{

  flex:1,
  justifyContent:"center",
alignItems:"stretch",
marginVertical:"14%",
marginHorizontal:"3%",
flexDirection:"column",

},

  
  columncontainer: {
    
    flex:1,
    flexDirection:"column",

  },

  rowcontainer: {
    flex:1,
    alignItems: 'center',
  justifyContent:"space-evenly",
    flexDirection:"row",
  },


  TouchableStyle:{
  flexShrink:2,

    width:150,
    height:140,
    opacity:10,
    
    justifyContent:"center",
    alignItems: "center",
   borderWidth:0.7,
   borderColor:"#4f83cc",

    backgroundColor: '#ffffff',
    marginVertical:"3%",
        borderRadius: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
          width: 0.1,
          height: 1.3,
        },
        elevation: 4,
    
      },



  buttonvertical: {
    width: 200,
    backgroundColor: '#1c8fed',
    marginVertical: 45,
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    elevation: 7,
  },


  ButtonText: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 35,
    width: 200,
    color: 'white',
  },
  
  paragraph_Hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

 ionicicon:{

fontSize:80,
color:"#364b73",
 },

 smallionicicon:{

   },

textinMenu:{


fontSize:14,
color:"#364b73",
fontWeight:"bold"

},

vectormenu:{
  color: '#364b73',
fontSize:76
},


vectormenutext:{

  fontSize:14,
    color:"#364b73",
    fontWeight:"bold",
    paddingTop:11,

},



headercolor:{

  ...Platform.select({
    ios: {
      
    },
    android: {
      
      backgroundColor:"#4f83cc"
    },
    default: {
      // other platforms, web for example
    },
  }),
},



centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  width:'80%',
  padding: 25,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}







});

const mapStatetoProps = (state)=>{

  const {}= state.FormHandler;

  const{
    Authentication_Response
  } = state.Authentication;




  const{
    
Line_Chart_Response,
programe_pie_response,

  } = state.Crud_Data;


return{

  Line_Chart_Response:Line_Chart_Response,
  programe_pie_response:programe_pie_response,
  Authentication_Response:Authentication_Response,
}

}





export default connect(mapStatetoProps,{
  linechart,
  Programe_Pie_Chart,
  fee_students_list,
  listData,internet_connection,
  Authentication,
  Gender_Pie_Chart,
  Verify_Pie_Chart,
  Semester_Pie_Chart,
  Degree_Verify_Pie_Chart,
  Graduated_Line_Chart,
internet_connection,
})(AdminPanel);

