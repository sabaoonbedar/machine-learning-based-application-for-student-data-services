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
    
    } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash'

import {Accounts_List} from  '../../../Redux/Actions'

 class Settings extends Component {


constructor(props){
super(props)

this.state={

  User_Role:''



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




componentDidMount=()=>{

this.props.Accounts_List()
this.Roles_Difference_State()

}




Roles_Difference_State= async ()=>{

  const role = await AsyncStorage.getItem('Role')

this.setState({User_Role:role})


 }



Different_Role_Views=()=>{

if(this.state.User_Role=='Content Manager'){

return (
<ListItem icon  onPress={()=>{Actions.jump('UserManagement')}}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon name="ios-people" />
              </Button>
            </Left>
            <Body>
              <Text>User Management</Text>
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


<ListItem icon  onPress={()=>{Actions.jump('UserManagement')}}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon name="ios-people" />
              </Button>
            </Left>
            <Body>
              <Text>User Management</Text>
            </Body>
            <Right>
              <Text>Roles</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>



)



}





}











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





headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={{paddingLeft:6}}>
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                        <Icon name="arrow-back" style={styles.iconColor} />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title>Settings</Title>
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
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                        <Icon name="arrow-back" style={styles.iconColor} />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title>Settings</Title>
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
    






  /* async ForgotPassword() {
    try {
      const userID = await AsyncStorage.getItem('userToken');

      //  Actions.ForgotPassword(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }

  async Profile() {
    try {
      const userID = await AsyncStorage.getItem('userToken');

      // Actions.Profile(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }

  async ChangePassword() {
    try {
      const userID = await AsyncStorage.getItem('userToken');
     // Actions.ChangePassword(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }*/

  render() {
    return (



      <Container>
   {this.headerfunction()}


      <Content style={{backgroundColor:'#f0f0f0'}}>
       
     
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white'}}>
       
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../Assets/logoverifylow.png')}
            style={{width: 130, height: 70}}
          />
          {/* <Text style={styles.textwithLogo}>Bverify</Text> */}
        </View>


        <View style={{paddingTop:'14%',}}>


{
    _.isArray(this.props.Authentication_Response.information)? this.props.Authentication_Response.information.map((item)=>{
        return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25, color:'#364b73',fontWeight:'bold',bottom:'100%'}}>{item.name}</Text>
        <Text style={{fontSize:16, color:'#364b73',bottom:'100%'}}>{item.email}</Text>
        
        
        
        </View>
        
        
        
        )
      }):console.log(' ')

}


</View>

</View>



        <View>


{/* second headers ends here */}


<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white'}}>




<ListItem icon  onPress={() => Actions.jump('Profile')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="ios-contact" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
            <Right>
              <Text>
                  
                 { _.isArray(this.props.Authentication_Response.information)? this.props.Authentication_Response.information.map((item)=>{
                     return(
                         <Text>{item.name}</Text>
                     )}):console.log(' ')}
              
              
              </Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>




{this.Different_Role_Views()}



          <ListItem icon onPress={()=>{Actions.jump('AboutUs')}}>
            <Left>
              <Button style={{ backgroundColor: "#4f83cc" }}>
                <Icon name="information-circle-outline" />
              </Button>
            </Left>
            <Body>
              <Text>About Us</Text>
            </Body>
            <Right>
              <Text>Bverify</Text>
              <Icon active name="arrow-forward" />
            </Right>
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
return{

  Authentication_Response:Authentication_Response

}

}





export default connect(mapStatetoProps,{Accounts_List})(Settings);