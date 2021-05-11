import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet,ScrollView} from 'react-native';
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


    import ActionSheet from 'react-native-actionsheet';

import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash'



 class Profile extends Component {




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
                      <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="arrow-back" style={{ fontSize: 32,color: '#4f83cc'}} />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title>About Us</Title>
      </Body>
      <Right>
      <Button transparent       onPress={() => Actions.pop()} >
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
                        <Icon name="arrow-back" style={styles.iconColor} />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title>About Us</Title>
        </Body>
        <Right>
        <Button transparent      onPress={this.showActionSheet} >
        <IconSimple size={25} name='options' style={styles.iconColor}/>
    
          </Button>
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
       
      <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white',paddingTop:'2%'}}>
       
       <View style={styles.imageContainer}>
         <Image
           source={require('../../../Assets/logoverify.png')}
           style={{width: 180, height: 70}}
         />
         {/* <Text style={styles.textwithLogo}>Bverify</Text> */}
       </View></View>
  


     
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'white',paddingTop:'2%'}}>
       
       


        <View style={{paddingTop:'10%', justifyContent:"center",alignItems:"center"}}></View>

</View>



        <View>


{/* second headers ends here */}








<View style={{paddingTop:'10%', flex:1,}}>




<View  style={{backgroundColor:'white',flex:1,padding:20}}>



<Text style={{fontSize:16,textAlign:'justify', color:'#364b73'}}>



<Text style={{fontWeight:'bold'}}>Bverify </Text>provides information about the Alumni Students, current enrolled students and provides 
verification protocols through Machine Learning to verify fee of a student that he/she has cleared his/her dues or no, degree verification: 
graduated students are authentic/non-authentic, generates reports: statistics based reports with some amount of computations via ML and DL, 
conversion of local data that is in excel sheets into data management processing unit and barcode generation by means of deep learning. 
It involves the use of ML and DL to produce NLP based model from Image processing and recognition techniques, most of the above described 
functionalities are focused to provide feasibility to the “Teachers” in order to perform aforementioned processes in the department. <Text style={{fontWeight:'bold'}}>Bverify </Text> 
is developed as a mobile and web application based on Deep learning (DL) and Machine learning (ML) algorithms and models. With the use of these concepts, 
Bverify transform all the data locally stored in the excel sheets into a form of online data management processing unit. 




</Text>








         
         
          </View>

</View>








<View style={{paddingTop:'35%', flex:1,}}>







</View>

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
    fontSize: 32,
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





export default connect(mapStatetoProps,{})(Profile);