import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {Authentication,Auth_Form} from '../Redux/Actions'
import Loader from '../Scenes/Loader'
import IconAnt from 'react-native-vector-icons/AntDesign';
import { AsyncStorage } from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';

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
  Card,
  CardItem,
  Form,
Label,
} from 'native-base';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView, TouchableWithoutFeedback} from 'react-native-gesture-handler';

class AdminLoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      isLoading:false,
      email:'',
      password:'',
      show:true,
      selected: false,


    };
  }




  show_password = () =>{

    if(this.state.selected==true){
    return (
    
    <TouchableOpacity onPress={()=>{
    
    this.setState({
    selected:false,
    show:true
    
    })
    
    }}>
    
    <IconEnt name="eye-with-line" size={20} color={'#4f83cc'} />
    
    
    </TouchableOpacity>
    
    
    )
    
    }else{
    
      return (
    
    
    <TouchableOpacity onPress={()=>{
    
    this.setState({
    selected:true,
    show:false
    
    })
    
    }}>
    
    <IconEnt name="eye" size={20} color={'#4f83cc'} />
    
    
    </TouchableOpacity>
    
    
      )
    
    }
    
    
    }
    
    







store_credentials= async () =>{

await AsyncStorage.setItem('email',this.props.username.toString());
await AsyncStorage.setItem('password',this.props.password.toString());

}

 
Login_button=()=>{

if(this.props.loading!==true){

return(


<Button style={styles.buttonvertical} onPressIn={()=> 
{
  this.hideModal(false)
  

   }}>
                <Icon name="ios-key" />
                <Text style={styles.ButtonText}>Login</Text>
              </Button>


)

}else {

 

return(


  


<TouchableWithoutFeedback style={{  
    width: 200,
    height:45,
    backgroundColor: '#4f83cc',
    marginVertical: 45,
    borderRadius: 12,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    elevation: 7,}}
//  onPressIn={()=> this.hideModal(false) }
>
                {/* <Icon name="ios-key" /> */}
            <View style={{top:13}}>

<ActivityIndicator size={'small'} color={'white'}/>
</View>
              </TouchableWithoutFeedback>




)






}





}








  hideModal=hide=>{

this.props.Authentication(this.props.username,this.props.password)
setTimeout(()=>{
  if(this.props.Authentication_Response){
    if(this.props.Authentication_Response.code=='300'){

this.props.hidemodal({isVisible:hide})

  Actions.AdminPanel();


}else if(this.props.Authentication_Response.code=='401'){
  Alert.alert('Login Failed !','Wrong Credentials, please check your email or password')
}

}
},500)
  }


  componentDidMount = async () => {
    //as soon as this second scene is lounched, this method would be automatically called.
  };

  render() {
   
    /*<Left>
            <Button transparent onPress={() => this.Back()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>*/
    //header area starts from here*********************************************************************************
    return (
     
      <Container>
<Loader/>
   
<ImageBackground source={require('../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>


        {/* <Header>
          <Left>
            <Button transparent onPress={()=> Actions.DegreeVerifyScreen()}>
              <Icon name="arrow-back" />
             
            </Button>
          </Left>
          <Body>
            <Title>Admin Login</Title>
            
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header> */}

<Content>

  
<View  style={styles.maincontainer}>

<View style={{marginVertical:50}}>

<Image 
              source={require('../Assets/logoverify.png')}
              style={{width: 150, height: 60}}
            />
</View>

<View  style={styles.formView}>

<Form style={styles.formSize}>
            <Item floatingLabel>
            <Icon name="ios-contact" style={styles.iconcolor}></Icon>

              <Label>Email</Label>
              <Input 
onChangeText={(value)=>this.props.Auth_Form({key:'username',value})}
              value={this.props.username}
              autoCorrect={false}
/>
            </Item>


            <Item floatingLabel>
            <Icon name='ios-lock' style={styles.iconcolor}></Icon>
              <Label>Password    </Label>
              <Input
           secureTextEntry={this.state.show}
           onChangeText={(value)=>this.props.Auth_Form({key:'password',value})}
              value={this.props.password}
              autoCorrect={false}
              autoCapitalize={false}
              
              />

            </Item>
            <View style={{position:'absolute', right:'4%',top:100}}>
            {this.show_password()}
</View>
          </Form>

      
         


</View> 
<View style={styles.rowcontainer}>
<View style={styles.iconContainer}>

<Icon name='ios-information-circle-outline' style={styles.icon}></Icon>


</View>

<View style={styles.textContainer}>

<Text style={styles.text}>
Please use your Admin ID and Password only. 

</Text>

</View>
</View>




<View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical:40
              }}>

<Button style={styles.buttonvertical} onPressIn={()=> {
  this.hideModal(false) 
  this.store_credentials()
}}>
                <IconAnt name="login"  color={'white'} size={25} style={{left:10}}/>
                <Text style={styles.ButtonText}>Login</Text>
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
 
 
    resizeMode: 'cover',
 
  },
  
maincontainer:{

  flex:1,
  flexDirection:"column",
 justifyContent:"center",
alignContent:"center",
alignItems:"center"

},

formSize:{
width:"100%"

},

rowcontainer: {
  flex:1,
  alignItems: 'center',
justifyContent:"center",
  flexDirection:"row",
},



textContainer:{

  justifyContent:"center",
  alignItems:"flex-start",
  flex:1,
marginTop:20,
paddingHorizontal:7

},

iconContainer:{



justifyContent:"center",
    flex:0.2,
    alignItems:"flex-end",
  marginTop:20,
 
  
},

icon:{

  color:"#4f83cc",
  fontSize:20,


},


text:{
color:"#364b73",
  fontSize:12,
},

formView:{

  flex:1,
  flexDirection:"column",
 justifyContent:"center",
alignContent:"center",
alignItems:"center",
width:"100%"


},

  columncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center",
    flex:1,
    flexDirection:"column",
  },

  rowcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center",
    flex:1,
    flexDirection:"row",
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


  ButtonText: {
    textAlign: 'left', 
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 35,
    width: 200,
    left:19,
    color: 'white',
  },
  
  paragraph_Hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  
iconcolor:{

color:"#4f83cc",

},



 
});


const mapStatetoProps = (state)=>{

  const {

 

  } = state.FormHandler;

  const{
    
    Authentication_Response,
    username,
    password,
    loading
  } = state.Authentication;


return{

  Authentication_Response: Authentication_Response,
  username:username,
password:password,
loading:loading,
}

}




export default connect(mapStatetoProps,{Authentication,Auth_Form}) (AdminLoginScreen);