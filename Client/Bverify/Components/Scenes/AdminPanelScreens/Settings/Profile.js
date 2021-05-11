import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet,Modal,TouchableHighlight} from 'react-native';
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
    Item,
    Input,
    
    } from 'native-base';


    import ActionSheet from 'react-native-actionsheet';

import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash'
import Loader from '../../Loader'
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconEnt from 'react-native-vector-icons/Entypo';

import {Settings_Form,Change_Password} from '../../../Redux/Actions'


 class Profile extends Component {


constructor(props){
super(props)
this.state={

nestedModal:false,

show:true,
selected: false,

User_Role:'',

}


}

nestedModalDriver=(value)=>{

this.setState({nestedModal:value})


}


componentDidMount=()=>{

this.Roles_Difference_State()

}



show_password = () =>{

  if(this.state.selected==true){
  return (
  
  <Button transparent onPress={()=>{
  
  this.setState({
  selected:false,
  show:true
  
  })
  
  }}>
  
  <IconEnt name="eye-with-line" size={20} color={'#364b73'} />
  
  
  </Button>
  
  
  )
  
  }else{
  
    return (
  
  
  <Button transparent onPress={()=>{
  
  this.setState({
  selected:true,
  show:false
  
  })
  
  }}>
  
  <IconEnt name="eye" size={20} color={'#364b73'} />
  
  
  </Button>
  
  
    )
  
  }
  
  
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
  




headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={{paddingLeft:6}}>
                      <Button transparent onPress={() => Actions.jump('Settings')}>
                        <Icon name="arrow-back" style={{ fontSize: 32,color: '#4f83cc'}} />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title>Profile</Title>
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
                      <Button transparent onPress={() => Actions.jump('Settings')}>
                        <Icon name="arrow-back" style={{color:'white'}} />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title>Profile</Title>
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
    





    error_handler=()=>{
      if(this.props.Change_Password_Response){
          if(this.props.Change_Password_Response.errors){
            
         
      
      if(this.props.Change_Password_Response.errors.password){
                 Alert.alert(this.props.Change_Password_Response.errors.password.toString())
                  }
           

      
            }else if(this.props.Change_Password_Response.code=='300'){
              
              setTimeout(()=>{
                this.Logout()
              },300)
             
         
         
              Alert.alert('success !','The password has been changed.')   
        
          
   
     
               
          
            
               }else{
            
              return(
               
                Alert.alert('Something Went Wrong !','Please, fill the required fields ')
              )
               }
          }else{
      
            return(
      
              Alert.alert('Something Went Wrong !','No data is updated')
      
            )
          }
      
        }
      
        

Roles_Difference_State= async ()=>{

  const role = await AsyncStorage.getItem('Role')

this.setState({User_Role:role})


 }


 Different_Role_Views=()=>{

  if(this.state.User_Role=='Content Manager'){
  
  return (
  <View>

  </View>
  
  
  
  )
  
  }else if(this.state.User_Role=='Viewer'){
  
  return(<View></View>)
  
  
  
  }else{
  
  return(
  
  
    <View  style={{backgroundColor:'white'}}>



          <ListItem icon onPress={()=>{


Alert.alert(
      "Password !",
      "Are you sure you want to change your password ?",
      [
    
        { text: "Yes", onPress: () =>{this.setState({nestedModal:true})} },
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
              <Button style={{ backgroundColor: "#052a52" }}>
              <IconMaterial name="key-change" size={20} color={'white'} />
              </Button>
            </Left>
            <Body>
              <Text>Change Password</Text>
            </Body>
            <Right>
             

            {  _.isArray(this.props.Authentication_Response.information)? this.props.Authentication_Response.information.map((item)=>{
                     return(
                         <Text>{item.name}</Text>
                     )}):console.log(' ')}



              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
         
          </View>
  
  
  
  )
  
  
  
  }
  
  
  
  
  
  }
  
  















    changePassword = async ()=>{

      const old_password = await AsyncStorage.getItem('password');


      if(old_password===this.props.redux_old_password){
    
    if(this.props.redux_new_password===this.props.redux_confirm_password){


this.props.Change_Password(this.props.Authentication_Response.information.map(item=>{return item.users_id}),this.props.redux_new_password)

setTimeout(() => {
  this.error_handler();
}, 300);

    }else{
  
      Alert.alert('Password !', 'The password confirmation does not match')

    }
        
      }else{
        Alert.alert('Old Password !','Your old password does not match our records.')
      }
        
    
    }
    
    
    
    
    changedPasswordResponse=()=>{
    
    
    
      if(this.props.Change_Password_Response)
      
      if(this.props.Change_Password_Response.code==300){
      this.setState({nestedModal:false})
      }else{
      
        Alert.alert('Something Went Wrong !','failure to change the password')
      
      
      
      
      }}
    







  
   render() {



    return(
   

<Container>



{/* modal starts from here */}

<View>
<View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.nestedModal}
          onRequestClose={() => {
            this.nestedModalDriver(false)
          }}
        >

<View>
<Loader/>

</View>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>Change Password </Text>
</View>

         <View style={{width:230,paddingTop:5}}>
<Item rounded style={{height:30}}>
            <Input placeholder='Old Password' 

autoCorrect={false}
            onChangeText={(value)=>{this.props.Settings_Form({key:'redux_old_password',value})}}
value={this.props.redux_old_password}
autoCapitalize={false}
autoCorrect={false}
secureTextEntry={this.state.show}
            />
          </Item>
</View>


<View style={{width:230,paddingTop:20}}>
<Item rounded style={{height:30}}>
            <Input placeholder='New Password'
            
            autoCorrect={false}
            onChangeText={(value)=>{this.props.Settings_Form({key:'redux_new_password',value})}}
value={this.props.redux_new_password}
secureTextEntry={this.state.show}

autoCapitalize={false}
autoCorrect={false}
            
             />
          </Item>
</View>

<View style={{width:230,paddingTop:10}}>
<Item rounded style={{height:30}}>
            <Input placeholder='Confirm Password'
            
            autoCorrect={false}
            onChangeText={(value)=>{this.props.Settings_Form({key:'redux_confirm_password',value})}}
value={this.props.redux_confirm_password}
secureTextEntry={this.state.show}

autoCapitalize={false}
autoCorrect={false}
            
            
             />
          </Item>
</View>
          


      <View style={{position:'absolute', right:10,top:0,}}>
  <Button transparent onPress={()=>{
    this.nestedModalDriver(false)
  }}>

<IconIonic name="ios-close-circle-outline" size={20} color={'#364b73'} ></IconIonic>
  </Button>

</View>

<View style={{position:'absolute', left:'6%',top:'0%'}}>

  {this.show_password()}
</View>


{ Platform.OS == 'ios'?


<View style={{position:'absolute', right:'32%',top:'145%',}}>
  
<TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                 
    this.changePassword()


// setTimeout(()=>{
// this.changedRoleResponse()

//           },250)


                }}
              >
                <Text style={styles.textStyle}>Change Password</Text>
              </TouchableHighlight>

</View>


:


<View style={{position:'absolute', right:'32%', bottom:'-10%'}}>
  
<Button
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                 
    this.changePassword()


// setTimeout(()=>{
// this.changedRoleResponse()

//           },250)


                }}
              >
                <Text style={styles.textStyle}>Change Password</Text>
              </Button>

</View>



}

            
            </View>
          </View>
        </Modal>

        
      </View></View>

{/* modal ends from here */}







      
   {this.headerfunction()}


      <Content style={{backgroundColor:'#f0f0f0'}}>
       
     
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white',paddingTop:'6%'}}>
       
       


        <View style={{paddingTop:'14%',}}>


{
    _.isArray(this.props.Authentication_Response.information)? this.props.Authentication_Response.information.map((item)=>{
        return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25, color:'#364b73',fontWeight:'bold',bottom:'100%'}}>{item.name}</Text>
        <Text style={{fontSize:16, color:'#364b73',bottom:'100%'}}>{item.email}</Text>
        
        
        
        </View>
        
        
        
        )
      }):Alert.alert('Whoops !','Something went wrong, server error !')

}


</View>

</View>



        <View>


{/* second headers ends here */}
{_.isArray(this.props.Authentication_Response.information)?this.props.Authentication_Response.information.map((item)=>{return(<View>








<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>




<ListItem icon>
            {/* <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="ios-contact" />
              </Button>
            </Left> */}
            <Body>
              <Text>Username:   <Text style={{fontSize:14,fontWeight:'bold',color:'#364b73'}}>
              
              
             {item.name}
              
              </Text></Text>
            </Body>



            {/* <Right>
              <Text>
                  
                 { this.props.Authentication_Response? this.props.Authentication_Response.information.map((item)=>{
                     return(
                         <Text>{item.name}</Text>
                     )}):console.log(' ')}
              
              
              </Text>
              <Icon active name="arrow-forward" />
            </Right> */}
          </ListItem>




          <ListItem icon>
            
           
            <Body>
              <Text>Email:  <Text style={{fontSize:14,fontWeight:'bold',color:'#364b73'}}>
               
              
            {item.email}
              
              
              </Text></Text>
            </Body>



           
          </ListItem>


          <ListItem icon>
            
           
            <Body>
              <Text>Role:   <Text style={{fontSize:14,fontWeight:'bold',color:'#364b73'}}>
              
            {item.roles}
              
              </Text></Text>
            </Body>



           
          </ListItem>
         
          </View>

</View>








<View style={{paddingTop:'35%', flex:1,}}>



{this.Different_Role_Views()} 



</View>






</View>)}):console.log(' ')}
{/* this is the end */}

</View>









        </Content>







        <View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Are you sure you want to Log Out ?'}
          options={[
            
            // 'User Management',
            // 'About Us',
           
            'Logout',
            
            'cancel',
           
           ]}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={(index) => {  

if(index===0){
this.Logout()

}else if ( index===1){
  


  
 
  }else if (index==2){


  }else if (index==3){


}





          }}
        />


      </View>










</Container>



    )

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
    marginTop: 15,
 
  },
  modalView: {
    bottom:'17%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    width:'70%',
    height:210,
    
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
  }











});


const mapStatetoProps = (state)=>{
  const {} = state.FormHandler;
  const{
    Authentication_Response
  } = state.Authentication;

  const{
    redux_old_password,
    redux_new_password,
    redux_confirm_password,
    loading,
    Change_Password_Response
    } = state.SettingsForm;


return{

  Authentication_Response:Authentication_Response,
  redux_old_password:redux_old_password,
redux_new_password:redux_new_password,
redux_confirm_password:redux_confirm_password,
Change_Password_Response:Change_Password_Response,
loading:loading,

}

}





export default connect(mapStatetoProps,{Settings_Form,Change_Password})(Profile);