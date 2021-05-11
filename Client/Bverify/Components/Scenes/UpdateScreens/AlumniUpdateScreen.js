
 /*{Platform.OS === 'android' ? 

 <Scene key="History" component={History} title="History"/>
:
 //Type replace is used to disable back swipe in IOS device
 <Scene key="History" component={History} title="History" />
}*/



import React, {Component} from 'react';
import ActionSheet from 'react-native-actionsheet';
import{connect} from 'react-redux';
import{Delete,AlumniSystemSearch,listData} from '../../Redux/Actions'
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
RefreshControl
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
Label,
Drawer,
} from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Iconfont from 'react-native-vector-icons/FontAwesome';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontiso from 'react-native-vector-icons/Fontisto';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {Actions} from 'react-native-router-flux';

 class AlumniUpdateScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      isLoading:false,
      isDrawerOpen:false,
      refreshing: false,
     setRefreshing:false,
    };
  }




  showmodal = show =>{

this.setState({isVisible:show});

  }


  hidemodal = hide =>{

    this.setState({isVisible:hide});
    
      }
  

  componentDidMount = async () => {
  
  };


//for the loader when you drage it down
wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


 onRefresh = () => {
  this.setState({setRefreshing:true});

  //for refreshing the current scene
  Actions.refresh({key: Math.random()})
 this.wait(2000).then(() => this.setState({setRefreshing:false}));
}
// ends here



headerfunction(){

if(Platform.OS == 'ios'){
return(
  <View>
  <Header transparent>
  <Left><Button transparent onPress={()=>{Actions.AlumniSystem()}}>
  <Icon name="arrow-back"/>
    </Button>
   
  </Left>
  <Body>
    <Title></Title>
  </Body>
  <Right>
  <Button transparent>
      <Icon name='ios-glasses'/>
    </Button>
  </Right>


</Header></View>

)


}else{




  return(
    <Header style={styles}>
    <Left><Button transparent >
        <Icon name='menu' />
      </Button>
     
    </Left>
    <Body>
      <Title></Title>
    </Body>
    <Right>
    <Button transparent>
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
            source={require('../../Assets/loaderblack.gif')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../../Assets/loadingText.gif')}
            style={{width: 35, height: 10, marginTop: 15}}
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

<ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>


   



{this.headerfunction()}

      
  
      

<Content refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={()=>{this.onRefresh}} />
        }>
<View style={{height:'3%'}}></View>

<Card style={styles.header_card}>
            <CardItem style={styles.header_card} >
              <Body>
                <Text style={{fontSize:24,fontWeight:'bold',color:'white'}}>
                {this.props.Name}
                </Text>
                <Text style={{fontSize:16,color:'white'}}>
                {this.props.Email_address}
                </Text>
              </Body>
            </CardItem>
          </Card>
<View style={{height:'3%'}}></View>
<Card style={{borderTopRightRadius:25}}>
            {/* <CardItem header bordered>
              <Text></Text>
            </CardItem> */}
            <CardItem bordered style={{borderTopRightRadius:25}} >
              <Body>
                <Text style={{fontSize:17,justifyContent:"flex-start"}}>
<Text style={{fontWeight:'bold'}}>{this.props.Name}</Text> son of <Text style={{fontWeight:'bold'}}>{this.props.Father_name}</Text> took admission on the date: <Text style={{fontWeight:'bold'}}>{this.props.Admission_date}</Text> and was successfully able to complete his graduation dated: <Text style={{fontWeight:'bold'}}>{this.props.Graduation_date}</Text> and his degree is {this.props.Status}.                  
                 
                </Text>
                
              </Body>
            </CardItem>


            <CardItem bordered>
              <Body>
                <Text>
                  <Text>Registration Number: {this.props.Registration_num}</Text>{'\n'}
                  <Text>CNIC: {this.props.Cnic}</Text>{'\n'}
                  <Text>Passport Number: {this.props.Passport_num}</Text>{'\n'}
                  <Text>Admission Date: {this.props.Admission_date}</Text>{'\n'}
                  <Text>Admission Date: {this.props.Graduation_date}</Text>{'\n'}

                </Text>
                
              </Body>
            </CardItem>



            <CardItem footer bordered>
              <Text>Information of Alumni: {this.props.Name} </Text>
            </CardItem>
          </Card>


          <View style={{height:15}}></View>

<Card style={styles.header_card}>



<CardItem style={{backgroundColor:'#364b73'}} >
              <Body>
                <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>
                System Information
                </Text>
            
              </Body>
            </CardItem>

            <CardItem  >
              <Body>
                <Text style={{color:'black'}}>
          created_at: {this.props.Created_at}
                </Text>
                <Text style={{color:'black'}}>
          Updated_at: {this.props.Updated_at}
                </Text>
              </Body>
            </CardItem>
          </Card>




</Content>



{/* <TouchableOpacity
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
     onPress={this.showActionSheet}
 >
                   <Iconfont name="edit" size={37} color= '#364b73' />
  </TouchableOpacity> */}




</ImageBackground>








      </Container>
     







    );
  }
}

const styles = StyleSheet.create({


header_card:{

  backgroundColor:'#364b73',
  borderBottomLeftRadius:25,
  borderTopRightRadius:20,


},


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
marginVertical:25,
marginHorizontal:10,
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
}

});

const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data} = state.Crud_Data;
return{
alumni_data:alumni_data,
search:search,


}

}



export default connect(mapStatetoProps,{AlumniSystemSearch,listData,Delete}) (AlumniUpdateScreen);