import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet,Modal, FlatList,ScrollView,TouchableHighlight,Picker} from 'react-native';
import {
    Left, 
    Right,
     List, 
    ListItem, 
    Icon,
    Body,
    Content,
    Button,
    Switch,
    Container,
    Header,
    left,
    right,
    body,
    Title,
    Card,
    CardItem,
Input,
    Item,
    } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import IconIonic from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Loader from '../../Loader'


import _ from 'lodash'

import {Accounts_List,Settings_Form,Delete_Administration,dynamic_picker_settings,Change_Role} from '../../../Redux/Actions'


 class UserManagement extends Component {



  constructor(props) {
    super(props)
      this.state = {
        //for aliasing when Colon is used
        modalVisible:false,
        text: '',
        data: this.props.Accounts_Response,
        nestedModal: false,
        selected_id:'',

        User_Role:'',

      }
  
      this.arrayholder = this.state.data;
    
  //   //for refreshing the screen on back
  //     this.props.navigation.addListener(
  //       'didFocus',
  //       payload => {
  //         this.onRefresh()
  //       }
  // );
  // //
  
    }


componentDidMount=()=>{
  this.props.Accounts_List()
  
  this.Roles_Difference_State()


  this.willFocusSubscription = this.props.navigation.addListener(
    'willFocus',
    () => {
      this.onRefresh()
    }
  );





}

nestedModalDriver=(value)=>{

this.setState({nestedModal:value})

}


 
componentWillUnmount() {
  this.willFocusSubscription.remove();
 
}






Roles_Difference_State= async ()=>{

  const role = await AsyncStorage.getItem('Role')

this.setState({User_Role:role})


 }



Different_Role_Views=()=>{

  if(this.state.User_Role=='Content Manager'){
  
  return (
  
  
    <ListItem icon onPress={()=>{Actions.jump('OtherRoles')}}>
    <Left>
      <Button style={{ backgroundColor: "#FF9501" }}>
      <IconAnt  name="addusergroup" color={'white'} size={20}/>
      </Button>
    </Left>
    <Body>
      <Text>Create Other Roles</Text>
    </Body>
    <Right>
      <Text>Roles</Text>
      <Icon active name="arrow-forward" />
    </Right>
  </ListItem>
  
  
  )
  
  }else if(this.state.User_Role=='Viewer'){
  
  return(<View></View>)
  
  
  
  }else{
  
  return(
  



<View>

<ListItem icon onPress={()=>{Actions.jump('AdminAccount')}} >
            <Left>
              <Button style={{ backgroundColor: "#10a315" }}>
                <IconAnt  name="adduser" color={'white'} size={20}/>
              </Button>
            </Left>
            <Body>
              <Text>Create Admin Account</Text>
            </Body>
            <Right>
              <Text>
                  
                Admin
              
              
              </Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>




          <ListItem icon onPress={()=>{Actions.jump('OtherRoles')}}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
              <IconAnt  name="addusergroup" color={'white'} size={20}/>
              </Button>
            </Left>
            <Body>
              <Text>Create Other Roles</Text>
            </Body>
            <Right>
              <Text>Roles</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>




  
    <ListItem icon onPress={()=>{

      this.showmodal(show=false)
      setTimeout(()=>{
        this.showmodal(show=true)
      },1)         
                 
                }}>
                  <Left>
                    <Button style={{ backgroundColor: "#19729c" }}>
                    <IconEntypo  name="list" color={'white'} size={20}/>
                    </Button>
                  </Left>
                  <Body>
                    <Text>List of Users</Text>
                  </Body>
                  <Right>
                    <Text>Admins and others</Text>
                    <Icon name="arrow-up"   style={{paddingLeft:6}} />
      
                  </Right>
                </ListItem>
  
  
                </View>
  )
 

  
  
  }
  
  
  
  
  
  }
  
  
  
  
  








//for the loader when you drage it down
wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


 onRefresh = () => {
  

  this.props.Accounts_List();
 
 this.wait(400).then(() => {
 
 this.setState({data:this.props.Accounts_Response})
//for refreshing the current scene
  // Actions.refresh({key: Math.random()})
 
}
 );

}
// ends here


 





 

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




//for searching the data in the flatelist

searchData(text) {
    

  const newData = this.arrayholder.filter(item => {
    const itemData = item.name.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1
  });

  
  this.setState({
    data: newData,
    text: text
    })
}

//searching ends here




  showmodal = show =>{

    this.setState({modalVisible:show});
    
      } 


Delete_Administration_response=()=>{




if(this.props.Delete_Response)


if(this.props.Delete_Response.code==300){
this.onRefresh();
Alert.alert('Success !','The information has successfully deleted from our records')

}else{

  Alert.alert('Something Went Wrong')




}}


changeRole =()=>{

  if(this.props.redux_picker===this.props.redux_picker){


    this.props.Change_Role(this.state.selected_id,this.props.redux_picker)
    
  }else{
    Alert.alert('Problem in picker')
  }
    

}




changedRoleResponse=()=>{



  if(this.props.Change_Role_Response)
  
  if(this.props.Change_Role_Response.code==300){
  this.setState({nestedModal:false})
  this.onRefresh();
  
  }else{
  
    Alert.alert('Something Went Wrong !','roles are not assign properly')
  
  
  
  
  }}







profile_name=()=>{

if(this.props.Authentication_Response){
if(this.props.Authentication_Response.length){


  return(

    this.props.Authentication_Response? this.props.Authentication_Response.information.map((item)=>{
        return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25, color:'#364b73',fontWeight:'bold',bottom:'100%'}}>{item.name}</Text>
        <Text style={{fontSize:16, color:'#364b73',bottom:'100%'}}>{item.email}</Text>
        
        
        
        </View>
        
        
        
        )
      }):console.log(' '))


  

}else{


return(
  <Text></Text>
)


  
}




}else{


  return(
    <Text></Text>
  )
  


}

}




Flatlist_Creator=()=>{

  if(this.props.Accounts_Response){

  return(
  
    <FlatList
  
            // ItemSeparatorComponent={this.itemSeparator}
            underlineColorAndroid='transparent'
  
            // style={{flex:1,}}
            data={this.state.data}
            // data={this.props.alumni_data.sort((a, b) => a.name.localeCompare(b.name))}
            keyExtractor={ (item, index) => index.toString() }
  
          //   refreshControl={
          //   <RefreshControl
          //     colors={["red", "yellow"]}
          //     refreshing={this.state.refreshControl}
          //     onRefresh={() => this._onRefresh()}
          //   />
          // }
  
        
  
            renderItem={({item}) => {
              return (
              <View>
                <ScrollView > 
                  <List >
                   <ListItem
                   
                    style={{height:60,width:'90%', padding:5 }}
                  
  onLongPress={
    ()=>{
this.setState({selected_id:item.id})

      Alert.alert(
      ''+item.name+'  ( '+item.roles+' ) ',
      "Select any option to proceed ?",
      [
        { text: "Change Role",
         onPress: () => {

this.nestedModalDriver(true)





         } },
        { text: "Delete", 
        onPress: () => {
        


          Alert.alert(
      "Delete !",
      "Are you sure you want to delete "+item.name+' ?',
      [
        {
          text: "Yes",
          onPress: () => {


this.props.Delete_Administration(item.users_id)
          setTimeout(()=>{
this.Delete_Administration_response()

          },300)



          },
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("do nothing") }
      ],
      { cancelable: false }
    );




          },
        
         },

        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
      { cancelable: false }
    );



    }
  }

  >
  
  
  <View style={{
  backgroundColor:'white',
  width:45,height:45,
  borderRadius:100,borderWidth:0,
  paddingRight:10,
  position:'relative',
  left:'-20%',
  justifyContent:"center",
  alignSelf:'center',
  alignItems:"center",
  shadowOpacity:1,
        shadowRadius:1,
  shadowColor:"#414685",
         shadowOffset: {
            width: 1,
            height: 2.5,
          },
          elevation: 6,
      
  }}>
  <Text style={{fontSize:18,
  marginLeft:'35%',
  fontWeight:'bold',
  color:"black"}}>
  {item.name.toString().substr(0,1)}
  
  </Text>
  
  
  </View>
  
                      <Left style={{flexDirection:"column",marginLeft:'3%'}}>
               
  
  
  <Text style={{fontWeight:"bold", fontSize:19}}>{item.name}</Text>
   <Text style={{color:'gray'}}>{item.email}</Text>
  
     
  
                   
                      </Left>
                      
  
  <Right><Text>
    {item.roles}
  </Text></Right>
  
  
  
  
                    </ListItem>
                  </List>
                  </ScrollView>
                  </View>
              );
              
            }
           
         }
            />
  
  
  
  )
  
  
        }
  
  else {
  
    if(this.props.Accounts_Response){
    if(this.props.Accounts_Response.length){
  setTimeout(() => {
        Actions.refresh({key: Math.random()})
  }, 500);
    }else{
    
    setTimeout(() => {
     
      Alert.alert('No Information !','Something Went Wrong With Connection')
     
    }, 3000);
     
  
    }
  }
  
  
  
  
   return (
  
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        
          marginTop:'60%'
      
        }}>
             
          <Image
            source={require('../../../Assets/loaderblack.gif')}
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../../../Assets/loadingText.gif')}
            style={{width: 35, height: 10, marginTop: 15}}
          />
        
  
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            justifyContent: 'center',
           paddingTop:'70%'
          
          }}>
          {/* <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 20}}>
            Bverify
          </Text> */}
        </View>
    
      </View>
      
    ); 
  
  }
  
  }
  
  
  











headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={{paddingLeft:6}}>
                      <Button transparent  onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={{ fontSize: 32,color: '#4f83cc'}} />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title style={{fontSize:12}}>User Management</Title>
      </Body>
      <Right>
      {/* <Button transparent      onPress={this.showActionSheet} >
          <IconSimple size={25} name='options' color={'#4f83cc'}/>
        </Button> */}
      </Right>
    
    
    </Header></View>
    
    )
    
    
    }else{
    
    
    
    
      return(
        <Header style={styles}>
        <Left>
        
        <View style={styles.headerButtonsContainer}>
                      <Button transparent  onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={styles.iconColor} />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title style={{fontSize:14}}>User Management</Title>
        </Body>
        <Right>
        {/* <Button transparent      onPress={this.showActionSheet} >
        <IconSimple size={25} name='options' color={'#4f83cc'}/>
    
          </Button> */}
        </Right>
      
      
      </Header>
      
      )
    
    
    
    }
    
    
    
    }
    









  
  render() {





    return (



      <Container>





<View>
<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.showmodal(false)}
            presentationStyle={'formSheet'}



        >

<View>
<Loader/>

</View>


<View>
<View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.nestedModal}
          
            onRequestClose={() => this.nestedModalDriver(false)}

          
        >



          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>Change Role </Text>
</View>

              <Picker
        
        style={{ 
          
        

...Platform.select({
    ios: {
      width: 260 ,position:"absolute",top:5,

    },
    android: {
      
       width: 200 ,position:"absolute",top:'50%',

     
    },
    default: {
      // other platforms, web for example
    },
  }),
        
        
        }}
    onValueChange={(value)=>this.props.dynamic_picker_settings({key:'redux_picker',value})}
selectedValue={this.props.redux_picker}

      > 
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Content Manager" value="Content Manager" />
        <Picker.Item label="Viewer" value="Viewer" />
      
      </Picker>
          


      <View style={{position:'absolute', right:10,top:6,}}>
      <Button transparent onPress={() => this.nestedModalDriver(false)}>
                <Text style={styles.loginButton}>
                
                <IconIonic name="ios-close-circle-outline" size={21} color={'#364b73'} ></IconIonic>


                
                </Text>
              </Button>

</View>

<View style={{


...Platform.select({
    ios: {
      position:'absolute', right:'37%',top:'145%',
    },
    android: {
      
      position:'absolute', right:'37%',bottom:'-15%',

     
    },
    default: {
      // other platforms, web for example
    },
  }),



}}




>
  
<TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                 
    this.changeRole()


setTimeout(()=>{
this.changedRoleResponse()

          },250)


                }}
              >
                <Text style={styles.textStyle}>Change Role</Text>
              </TouchableHighlight>

</View>



            
            </View>
          </View>
        </Modal>

        
      </View>
</View>







        <View >
<View style={{flexDirection:'row'}}>
<View style={{position:'absolute', right:'5%',top:-25,}}>
<Button transparent onPress={() => this.showmodal(false)}>
                <Text style={styles.loginButton}>
                
                <IconIonic name="ios-close-circle-outline" size={25} color={'#364b73'} ></IconIonic>


                
                </Text>
              </Button>

</View>


<View style={{width:'80%',height:20, top:0,left:15}}>

<Item rounded style={{borderColor:'#364b73'}}>
            <Input placeholder='Search here' style={{height:40}}

onChangeText={(text) => this.searchData(text)}
          value={this.state.text}
autoCorrect={false}
            />
          </Item>


</View>




</View>
        


<View style={{marginTop:'12%'}}> 

{this.Flatlist_Creator()}


</View>
      



         


</View>

        </Modal>
</View>



   {this.headerfunction()}


      <Content style={{backgroundColor:'#f0f0f0'}}>
       













       
     
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white'}}>
       
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../Assets/User.png')}
            style={{width: 140, height: 120}}
          />
          {/* <Text style={styles.textwithLogo}>Bverify</Text> */}
        </View>


        <View style={{paddingTop:'8%',}}>




</View>

</View>



        <View>


{/* second headers ends here */}


<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>




{/* from here role view is rendering */}



          {this.Different_Role_Views()}
          
         
          </View>

</View>








<View style={{paddingTop:'35%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>



          <ListItem icon onPress={()=>{


Alert.alert(
      "Log Out !",
      "Are you sure you want to log out ?",
      [
    
        { text: "Yes", onPress: () => this.Logout() },
        {
          text: "No",
          onPress: () => console.log("Cancel"),
         
        }
        
      ],
      { cancelable: false }
    );


              } }
          
          
          >
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
              <IconMaterial name="logout" size={20} color={'white'} />
              </Button>
            </Left>
            <Body>
              <Text>Log Out</Text>
            </Body>
            <Right>
              <Text>
              
              
            
              {  _.isArray(this.props.Authentication_Response.information)? this.props.Authentication_Response.information.map((item)=>{
                     return(
                         <Text>{item.name}</Text>
                     )}):console.log(' ')}
              
              
              
              
              </Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
         
          </View>

</View>









</View>








        </Content>







</Container>
    );
  }
}

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    flexDirection: 'column',
    bottom:'5%'
  },

  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:'7%'
  },

  textwithLogo: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  textinList: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  listitemBody: {
    flex: 3,
  },

  iconSize: {
    fontSize: 25,
    color: '#4f83cc',
  },

  leftinlist: {
    flex: 0.5,
    borderWidth: 0,
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
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    width:'70%',
    height:'25%',
  
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
   top:-5,
    textAlign: "center"
  },

  iconColor:{


    ...Platform.select({
      ios: {

      },
      android: {
        
        color:'white',
       

      },
      default: {
        // other platforms, web for example
      },
    }),
  
  }






});


const mapStatetoProps = (state)=>{
  const {} = state.FormHandler;
  const{
    Authentication_Response
  } = state.Authentication;

  const{
   Accounts_Response,
   Delete_Response,
   redux_picker,
   Change_Role_Response,
  } = state.SettingsForm;


return{

  Authentication_Response:Authentication_Response,
  Accounts_Response:Accounts_Response,
  Delete_Response:Delete_Response,
  redux_picker:redux_picker,
  Change_Role_Response:Change_Role_Response,
}

}





export default connect(mapStatetoProps,{Accounts_List,Settings_Form,Delete_Administration,dynamic_picker_settings,Change_Role})(UserManagement);