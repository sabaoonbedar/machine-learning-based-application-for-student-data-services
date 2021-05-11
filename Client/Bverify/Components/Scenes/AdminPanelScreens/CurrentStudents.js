
 /*{Platform.OS === 'android' ? 

 <Scene key="History" component={History} title="History"/>
:
 //Type replace is used to disable back swipe in IOS device
 <Scene key="History" component={History} title="History" />
}*/


import {connect} from 'react-redux';
import React, {Component} from 'react';
import Sidebar from "../../Drawer/Sidebar"
import Iconfont from 'react-native-vector-icons/FontAwesome';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { AsyncStorage } from 'react-native';

import ActionSheet from 'react-native-actionsheet';

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
import Iconfontowesome from 'react-native-vector-icons/FontAwesome5';
import Iconionic from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView, TouchableHighlight, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {AlumniSystemSearch,Delete,listData} from '../../Redux/Actions'



 class CurrentStudents extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      isLoading:false,
      isDrawerOpen:false,
    };
  }


  Logout = async()=>{
    try {
      
  await AsyncStorage.removeItem('userToken', (err, result) => {
        console.log(result);});
  
  await AsyncStorage.removeItem('email', (err, result) => {
        console.log(result);});
  
  await AsyncStorage.removeItem('password', (err, result) => {
          console.log(result);});
  await AsyncStorage.removeItem('Role', (err, result) => {
            console.log(result);});
            
      Actions.reset('DegreeVerifyScreen')
  
  
  
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }
  



  showActionSheet = () => {
    this.ActionSheet.show()
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
  
  };


headerfunction(){

if(Platform.OS == 'ios'){
return(
  <View>
  <Header transparent>
  <Left>

  <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                    <Icon name="arrow-back" style={styles.iconSize} />
                  </Button>
                </View>
   
  </Left>
  <Body>
    <Text style={{fontSize:12,fontWeight:'bold'}}>Students Catogories</Text>
  </Body>
  <Right>
  <Button transparent      onPress={this.showActionSheet} >
      <IconSimple size={25} name='options' color={'#4f83cc'}/>
    </Button>
  </Right>


</Header></View>

)


}else{




  return(
    <Header style={styles}>
    <Left>
    
    <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                    <Icon name="arrow-back" style={styles.iconSize} />
                  </Button>
                </View>
     
    </Left>
    <Body>
    <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Students Catogories</Text>
    </Body>
    <Right>
    <Button transparent      onPress={this.showActionSheet} >
    <IconSimple size={25} name='options' color={'white'}/>

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
              style={{width: 56, height: 56}}
            />
            <Image
              source={require('../../Assets/loadingText.gif')}
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




   
<ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>


{this.headerfunction()}

      
     

      

<Content     
//  refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
          >

  <View>
  {/* <ImageBackground source={require('../Assets/tech.png')} style={styles.image}> */}

<View style={styles.maincontainer}>


<View style={styles.columncontainer}>


<View style={[styles.rowcontainer, styles.extrapadding]}>

<TouchableOpacity style={styles.TouchableStyle} 

onPress={() => Actions.jump('BsStudents')}

>

<IconEntypo name="users" size={60} color={"#364b73"}></IconEntypo>

<Text style={styles.textinMenu}>BS Students</Text>

</TouchableOpacity>


</View>


<View style={[styles.rowcontainer, styles.extrapadding]} >



<TouchableOpacity style={styles.TouchableStyle}  
onPress={()=>{Actions.jump('MscStudents')}}
>
<Iconfontowesome name="users" style={styles.ionicicon} ></Iconfontowesome>

<Text style={styles.textinMenu}>Msc Students</Text>


</TouchableOpacity>


</View>




<View style={[styles.rowcontainer, styles.extrapadding]} >

<TouchableOpacity 
style={styles.TouchableStyle} 
onPress={() => Actions.jump('PhdStudents')}
>

<Iconfontowesome name="user-graduate" style={styles.vectormenu} />


<Text style={styles.vectormenutext}>Phd Students</Text>


          
</TouchableOpacity>






</View>






<View style={[styles.rowcontainer, styles.extrapadding]} >


 <TouchableOpacity style={styles.TouchableStyle} 
 onPress={() => Actions.jump('MsStudents')}

  >


 <Iconfontowesome name="user-tie" style={styles.vectormenu} />


<Text style={styles.vectormenutext}>MS Students</Text>



</TouchableOpacity> 



</View>




<View style={[styles.rowcontainer, styles.extrapadding]} >


 <TouchableOpacity style={styles.TouchableStyle}
 onPress={()=>{Actions.jump('AllStudents')}}
   >


 <Iconfontowesome name="list-ol" style={styles.vectormenu} />


<Text style={styles.vectormenutext}>List of All Students</Text>



</TouchableOpacity> 



</View>






</View>

</View>



</View>




</Content>









{/* <View style={{position: 'absolute',                                          
       bottom: "15%",                                                    
       right: "17%",}}>

<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'#4f83cc',
       alignItems:'center',
       justifyContent:'center',
       width:"180%",
       height:"180%",
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
  </TouchableOpacity>

</View>
 */}



<View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Select any of the action below to proceed'}
          options={[
            
            'Male Students List',
            'Female Students List',
           
            'Logout',
            
            'cancel',
           
           ]}
          cancelButtonIndex={3}
          destructiveButtonIndex={2}
          onPress={(index) => {  

if(index===0){
Actions.jump('MaleStudents')


}else if ( index===1){
  
  Actions.jump('FemaleStudents')

  
 
  }else if (index==2){

this.Logout()

  }else if (index==3){


}





          }}
        />


      </View>













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

extrapadding:{

marginVertical:'2.3%',

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
marginVertical:'2%',
marginHorizontal:'3%',
flexDirection:"column",

},
headerButtonsContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  left:'2%'
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

    width:'80%',
    height:'105%',
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

fontSize:60,
color:"#364b73",
paddingTop:'3%'
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
  fontSize:61
},


vectormenutext:{

  fontSize:14,
    color:"#364b73",
    fontWeight:"bold",
    paddingTop:8,

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



export default connect(mapStatetoProps,{AlumniSystemSearch,listData,Delete}) (CurrentStudents);