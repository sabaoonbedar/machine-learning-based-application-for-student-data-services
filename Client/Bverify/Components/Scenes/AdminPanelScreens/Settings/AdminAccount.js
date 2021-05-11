import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet} from 'react-native';
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
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import Loader from '../../Loader';
import _ from 'lodash'

import {Settings_Form,Admin_Register,Accounts_List} from '../../../Redux/Actions'




 class AdminAccount extends Component {


constructor(props){
super(props)
this.state={

show:true,
selected: false,

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






Admin_Account_Registration= async ()=>{

const store_email = await AsyncStorage.getItem('email')

const username = this.props.redux_username;
const email = this.props.redux_email;
const password = this.props.redux_password;
const confirm_password =  this.props.redux_confirm;
const roles = 'Admin'
if(password === confirm_password){


this.props.Admin_Register(username,email,password,roles,store_email)

setTimeout(() => {
  this.error_handler();
}, 300);



}else{

Alert.alert('Password !', 'The password confirmation does not match');


}



}







  Register_button=()=>{
    if(
         this.props.redux_username &&
         this.props.redux_email && 
         this.props.redux_password && 
         this.props.redux_confirm
         ){
    
    return(
    
    <Button  transparent onPress={()=>{

this.Admin_Account_Registration();

    }}
    
    >
            

    <Text style={{
    
    
    ...Platform.select({
      ios: {
        fontWeight:'bold', color:'#364b73',fontSize:16, marginRight:8
      },
      android: {
        
        fontWeight:'bold', color:'white',fontSize:16, marginRight:8
        
      },
      default: {
        // other platforms, web for example
      },
    }),
    
    
    }}>
    <IconIonic name="ios-add-circle-outline" size={16} color={styles.iconColor}/> Add
    </Text>
    
    </Button>
    
    
    )
    
    }
    
    
    
      }






error_handler=()=>{
        if(this.props.Admin_Account_Response){
            if(this.props.Admin_Account_Response.errors){
              
           
        
        if(this.props.Admin_Account_Response.errors.name){
                   Alert.alert(this.props.Admin_Account_Response.errors.name.toString())
                    }
                 else if(this.props.Admin_Account_Response.errors.email){
                      Alert.alert(this.props.Admin_Account_Response.errors.email.toString())
                    }
                 else if(this.props.Admin_Account_Response.errors.password){
                      Alert.alert(this.props.Admin_Account_Response.errors.password.toString())
                    }
                    else if(this.props.Admin_Account_Response.errors.roles){
                      Alert.alert(this.props.Admin_Account_Response.errors.roles.toString())
                    }




        
              }else if(this.props.Admin_Account_Response.code=='300'){
                
                setTimeout(()=>{
                  Actions.pop();
                },300)
               
           
           
                Alert.alert('success !','Account has successfully created.')   
          
            
     
       
                 
            
              
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
        
          
        











headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={{paddingLeft:6}}>
                      <Button transparent onPress={() => Actions.jump('UserManagement')}>
                        <Icon name="arrow-back" style={{ fontSize: 32,color: '#4f83cc'}} />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title style={{fontSize:14}}>Create Admin</Title>
      </Body>
      <Right>
  {this.Register_button()}
      </Right>
    
    
    </Header></View>
    
    )
    
    
    }else{
    
    
    
    
      return(
        <Header style={styles}>
        <Left>
        
        <View style={styles.headerButtonsContainer}>
                      <Button transparent onPress={() => Actions.jump('UserManagement')}>
                        <Icon name="arrow-back" style={styles.iconColor} />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title style={{fontSize:14}}>Create Admin</Title>
        </Body>
        <Right>
       
        {this.Register_button()}



        </Right>
      
      
      </Header>
      
      )
    
    
    
    }
    
    
    
    }
    

    





        




  

  render() {


    return (



      <Container>
<View>
<Loader/>
</View>

   {this.headerfunction()}

  
      <Content style={{backgroundColor:'#f0f0f0'}}>
      
     
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white'}}>
       


        <View style={{padding:'7%',}}>
<Text style={{color:'#364b73'}}>An "Administrator Account" has full access to the account with all permissions.</Text>



</View>

</View>



        <View>


{/* second headers ends here */}


<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>




<ListItem style={{height:50}} >

<Text style={{fontSize:17}}>Name  </Text>
            <Input placeholder='User name'  underlineColorAndroid="transparent"
            autoCorrect={false}
            onChangeText={(value)=>{this.props.Settings_Form({key:'redux_username',value})}}
value={this.props.redux_username}
             />
        
          </ListItem>


          <ListItem style={{height:50}} >

<Text style={{fontSize:17}}>Email   </Text>
            <Input placeholder='Email Address' 
             underlineColorAndroid="transparent" 
            autoCorrect={false}

onChangeText={(value)=>{this.props.Settings_Form({key:'redux_email',value})}}
value={this.props.redux_email}
            />
        
          </ListItem>




          
          </View>

</View>



<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>




<ListItem style={{height:50}} >

<Text style={{fontSize:17}}>Password  </Text>
            <Input placeholder='Password'  underlineColorAndroid="transparent" 

secureTextEntry={this.state.show}

autoCorrect={false}

onChangeText={(value)=>{this.props.Settings_Form({key:'redux_password',value})}}
value={this.props.redux_password}
autoCapitalize={false}

            />

            {this.show_password()}

          </ListItem>


          <ListItem style={{height:50}} >

<Text style={{fontSize:17}}>Confirm Password   </Text>
    <Input placeholder='Confirm Password'  underlineColorAndroid="transparent" 
          secureTextEntry={this.state.show}

          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={(value)=>{this.props.Settings_Form({key:'redux_confirm',value})}}

          value={this.props.redux_confirm}
        


            />
        
          </ListItem>




          
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


  iconColor:{


    ...Platform.select({
      ios: {
        color:'#364b73'
      },
      android: {
        
        color:'white',
       

      },
      default: {
        // other platforms, web for example
      },
    }),
  
  },





});


const mapStatetoProps = (state)=>{
  const {} = state.FormHandler;
  const{
    Authentication_Response
  } = state.Authentication;

  const{
  redux_username,
  redux_email,
  redux_password,
  redux_confirm,
  Admin_Account_Response,
  loading
  } = state.SettingsForm;

return{

  Authentication_Response:Authentication_Response,
redux_username:redux_username,
redux_email:redux_email,
redux_password:redux_password,
redux_confirm:redux_confirm,
Admin_Account_Response:Admin_Account_Response,
loading:loading,
}

}





export default connect(mapStatetoProps,{Settings_Form,Admin_Register,Accounts_List})(AdminAccount);