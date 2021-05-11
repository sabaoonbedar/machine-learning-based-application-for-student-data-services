
 /*{Platform.OS === 'android' ? 

 <Scene key="History" component={History} title="History"/>
:
 //Type replace is used to disable back swipe in IOS device
 <Scene key="History" component={History} title="History" />
}*/



import React, {Component} from 'react';
import ActionSheet from 'react-native-actionsheet';
import{connect} from 'react-redux';
import Iconn from 'react-native-vector-icons/Ionicons';
import AlumniScreen from '../AdminPanelScreens/AlumniSystem';
import{Delete,AlumniSystemForm,listData,Update,picker_form,date_picker} from '../../Redux/Actions';
import moment from "moment";
import Loader from '../Loader';
import email from 'react-native-email';
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
  TouchableWithoutFeedback,
Platform,
RefreshControl,
Modal,
Animated,
Share,
ScrollView,
Dimensions,
SafeAreaView,
TouchableHighlight,
LayoutAnimation,
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
Picker,
DatePicker,
Toast,
List,
ListItem,
} from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Iconfont from 'react-native-vector-icons/FontAwesome';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontiso from 'react-native-vector-icons/Fontisto';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {AsyncStorage} from 'react-native';



import {Actions} from 'react-native-router-flux';

 class AlumniShowScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {
      //for aliasing when Colon is used
      isLoading:false,
      isDrawerOpen:false,
      refreshing: false,
     setRefreshing:false,
     isVisible:false,
  Done_Button_value: new Animated.Value(0),
  showToast: false,
Respons_info:'',
modalVisible: false,

ScrollY:new Animated.Value(0),

redux_loading:false,

User_Role:'',


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
  
  






  Roles_Difference_State= async ()=>{

    const role = await AsyncStorage.getItem('Role')
  
  this.setState({User_Role:role})
  
  
   }





   Different_Role_Views=()=>{

    if(this.state.User_Role=='Content Manager'){
    
    return (
   
//========================starts from here==========================================
<View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Select any of the action below to proceed'}
          options={[
            
            'Edit',
            // 'Delete',
            // 'Share Details', 
            'Email to '+this.props.Name,
            'Logout',
            
            'cancel',
           
           ]}
          cancelButtonIndex={3}
          destructiveButtonIndex={2}
          onPress={(index) => {  

if(index===0){

  this.showmodal(show=false)
  this.showmodal(show=true)

}
// else if ( index===1){
  
//   Alert.alert(
//       "Are you sure you want to delete ?",
//       this.props.Name,
//       [
//         {
//           text: "Yes",
//           onPress: () => {

//             this.props.Delete(this.props.id);
           
// setTimeout(()=>{
// Actions.jump('AlumniSystem')

//   if(this.props.delete_response){

//   if(this.props.delete_response.code=='100'){
// Actions.refresh({key: Math.random()});


//     Alert.alert(
//       "",
//       this.props.Name +' '+'has successfully deleted from our records.\n Drag Down to Refresh !',
//       [
       
//         { text: "OK", onPress: () => {
// //  Actions.refresh({key: Math.random()});

//         } }
//       ],
//       { cancelable: false }
//     );




// // Alert.alert('',this.props.Name +' '+'has successfully deleted from our records')



//   } else{

// Alert.alert('Whoops !','it seems there is some problem on deletion')


// }

// }else{

// Alert.alert('Whoops !','it seems there is some problem on deletion')


// }







// },1200)
// // Actions.jump('AlumniSystem');






//           },
//           style: "cancel"
//         },
//         { text: "No", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );
  
 
  // }
  // else if (index==2){

  //   this.onShare()
  // }
  else if (index==1){

this.handleEmail()
}


else if (index==2){

this.Logout()
}


          }}
        />


      </View>


//========================ends here==========================================
   
    
    
    )
    
    }else if(this.state.User_Role=='Viewer'){
    
    return(


//========================starts from here==========================================
<View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Select any of the action below to proceed'}
          options={[
            
            // 'Edit',
            // 'Delete',
            // 'Share Details', 
            // 'Email to '+this.props.Name,
            'Logout',
            
            'cancel',
           
           ]}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={(index) => {  

if(index===0){

this.Logout()

}

          }}
        />


      </View>


//========================ends here==========================================
   
    





    )
    
    
    
    }else{
    
    return(
    
//========================starts from here==========================================
    
      <View>
      {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
      <ActionSheet
        ref={o => this.ActionSheet = o}
        title={'Select any of the action below to proceed'}
        options={[
          
          'Edit',
          'Delete',
          'Share Details', 
          'Email to '+this.props.Name,
          'Logout',
          
          'cancel',
         
         ]}
        cancelButtonIndex={5}
        destructiveButtonIndex={1}
        onPress={(index) => {  

if(index===0){

this.showmodal(show=false)
this.showmodal(show=true)

}else if ( index===1){

Alert.alert(
    "Are you sure you want to delete ?",
    this.props.Name,
    [
      {
        text: "Yes",
        onPress: () => {

          this.props.Delete(this.props.id);
         
setTimeout(()=>{
Actions.jump('AlumniSystem')

if(this.props.delete_response){

if(this.props.delete_response.code=='100'){
Actions.refresh({key: Math.random()});


  Alert.alert(
    "",
    this.props.Name +' '+'has successfully deleted from our records.\n Drag Down to Refresh !',
    [
     
      { text: "OK", onPress: () => {
//  Actions.refresh({key: Math.random()});

      } }
    ],
    { cancelable: false }
  );




// Alert.alert('',this.props.Name +' '+'has successfully deleted from our records')



} else{

Alert.alert('Whoops !','it seems there is some problem on deletion')


}

}else{

Alert.alert('Whoops !','it seems there is some problem on deletion')


}







},1200)
// Actions.jump('AlumniSystem');






        },
        style: "cancel"
      },
      { text: "No", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );


}else if (index==2){

  this.onShare()
}else if (index==3){

this.handleEmail()
}

else if (index==4){

this.Logout()
}





        }}
      />


    </View>

    
//========================ends here==========================================
    
    )
    
    
    
    }
    
    
    
    
    
    }
    

















  setModalVisible = (visible) => {
    console.log(visible)
 this.setState({ modalVisible: visible });
}



Loading=()=>{
if(this.props.loading==true){

  this.setState({redux_loading:true})

}else{


  this.setState({redux_loading:false})


}


}




  headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left><Button transparent onPress={()=>{Actions.pop()}}>
      <Icon name="arrow-back"/>
        </Button>
       
      </Left>
      <Body>
        <Title>Details</Title>
      </Body>
      <Right>
      <Button transparent   onPress={() => {
            this.setModalVisible(modalVisible=true);
          }} >
          <IconEntypo name='info' size={22} style={{color:'#4f83cc'}}/>
        </Button>
      </Right>
    
    
    </Header></View>
    
    )
    
    
    }else{
    
    
    
    
      return(
        <Header style={{marginTop:"-5.7%",}} >
        <Left><Button transparent >
            <Icon name="arrow-back" onPress={()=>{Actions.jump('AlumniSystem')}} />
          </Button>
         
        </Left>
        <Body>
          <Title>Details</Title>
        </Body>
        <Right>
        <Button transparent  onPress={() => {
            this.setModalVisible(modalVisible=true);
          }}>
          <IconEntypo name='info' size={22} style={{color:'white'}}/>

          </Button>
        </Right>
      
      
      </Header>
      
      )
    
    
    
    }
    
    
    
    }
    







  











  error_handler=()=>{
if(this.props.update_response){
    if(this.props.update_response.errors){
        // console.log(this.props.update_response.errors)
          this.setState({isVisible:true})
   
// Toast.show({ 
          //   text:[this.props.update_response.errors.name],
            
          //   buttonText: "Okay",
          //   duration: 7000,
          //   position:'bottom',
          //   // type: "danger",
          //   textStyle: { fontWeight:"bold" },
    
          // })
if(this.props.update_response.errors.name){
           Alert.alert(this.props.update_response.errors.name.toString())
            }
         else if(this.props.update_response.errors.father_name){
              Alert.alert(this.props.update_response.errors.father_name.toString())
            }
         else if(this.props.update_response.errors.registration_num){
              Alert.alert(this.props.update_response.errors.registration_num.toString())
            }
         else if(this.props.update_response.errors.admission_date){
              Alert.alert(this.props.update_response.errors.admission_date.toString())
            }
         else if(this.props.update_response.errors.graduation_date){
              Alert.alert(this.props.update_response.errors.graduation_date.toString())
            }
         else if(this.props.update_response.errors.email_address){
              Alert.alert(this.props.update_response.errors.email_address.toString())
            }
        else if(this.props.update_response.errors.cnic){
              Alert.alert(this.props.update_response.errors.cnic.toString())
            }
        else if(this.props.update_response.errors.passport_num){
              Alert.alert(this.props.update_response.errors.passport_num.toString())
            }
       else if(this.props.update_response.errors.status){
              Alert.alert(this.props.update_response.errors.status.toString())
            }


      }else if(this.props.update_response.code=='300'){
        
        this.showmodal({isVisible:false})
        Actions.jump('AlumniSystem');
       
// setTimeout(()=>{
//         Actions.refresh({key:Math.random()})
// },1000)
Actions.refresh({key:Math.random()})
 Toast.show({ 
            text:'Information has successfully edited.',
            buttonText: "Okay",
            duration: 4000,
            position:'bottom',
            // type: "danger",
            textStyle: { fontWeight:"bold" },
    
          })
         
    
      
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

  





  handleEmail = () => {
    const to = [this.props.Email_address] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: [], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: '',
        body: ''
    }).catch(console.error)
  }




  onShare = async () => {
    try {
      const result = await Share.share({

        message:' \n RegisNo#: '+this.props.Registration_num+'\n Name: '+this.props.Name+'\n Father Name: '+this.props.Father_name+
        '\n Email: '+this.props.Email_address+'\n Admission: '+moment(this.props.Admission_date).format('DD-MM-YYYY')+'\n Graduation: '+moment(this.props.Graduation_date).format('DD-MM-YYYY')+'\n Status: '+this.props.Status+'\n CNIC: '+this.props.Cnic+
        '\n PassportNO#: '+this.props.Passport_num+''
     
       
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Alert.alert('Data has successfully sent','Press ok to proceed')
        } else {
          Alert.alert('Data has successfully sent','Press ok to proceed')

        }
      } else if (result.action === Share.dismissedAction) {
        // Alert.alert('Data has successfully sent','Press ok to proceed')

      }
    } catch (error) {
      alert(error.message);
    }
  };






  // onValueChange2() {
    
  //   this.setState({
  //     selected: this.props.redux_status
  //   });

  // }

//   set_date_formatter(value) {
    
    
//     new_value = moment(this.props.redux_admission).format("YYYY-MM-DD")
//  this.props.date_picker({key:'admission_picker',value})
    

//     console.log(new_value)

//     // this.setState({ chosenDate: markedDate })
   
//   }


Done_button_animation=()=>{
Animated.timing(this.state.Done_Button_value,{

  toValue: 1,

  duration:80,

useNativeDriver:true,

}).start();

}




  showmodal = show =>{

    this.setState({isVisible:show});
    
      }
    
    
      hidemodal = hide =>{
    
        this.setState({isVisible:hide});
        
          }









  //update function starts from here
  update_function=()=>{
    // S means student
s_id=this.props.id,
s_name=this.props.redux_name;
s_fname=this.props.redux_fname;
s_admission=this.props.redux_admission;
s_graduation=this.props.redux_graduation;
s_email=this.props.redux_email;
s_cnic=this.props.redux_cnic;
s_passport=this.props.redux_passport;
s_status=this.props.redux_status;

this.props.Update(s_id,s_name,s_fname,s_admission,s_graduation,s_email,s_cnic,s_passport,s_status)

  }
//ends here


  componentDidMount =  () => {
  this.Roles_Difference_State()
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
  // Actions.refresh({key: Math.random()})
 this.wait(2000).then(() => {
 this.setState({setRefreshing:false})
 this.props.listData();
 this.setState({data:this.props.alumni_data})
 

});
}
// ends here

showActionSheet = () => {
  this.ActionSheet.show()
}


// componentWillUnmount=()=>{

//   Actions.refresh({key: Math.random()});



// }

Date_information=()=>{

  if(this.props.redux_admission){

return(
<View>
<Text>
         {this.props.redux_admission.toString().substr(0,16)}
</Text> 
</View>
)

  }



}






//functions for done button************************





button_visible=()=>{

if(this.props.redux_name
  ||this.props.redux_fname
  ||this.props.redux_admission
  ||this.props.redux_graduation
  ||this.props.redux_email
  ||this.props.redux_cnic
  ||this.props.redux_passport
  ||this.props.redux_status
  ){

return(
 

<View>
<Animated.View style={{position:"absolute",right:'10%',bottom:'10%',opacity:this.state.Done_Button_value}}>
{this.Done_button_animation()}

<Button transparent 


onPress={()=>{


  this.update_function();
  // this.setState({Respons_info:this.props.update_response.errors})
 
 
  setTimeout(() => {
      // this.showmodal({isVisible:false})
      this.error_handler();
    }, 300);
 
}}




>
 <Text style={{fontSize:18,color:'#364b73',fontWeight:'bold'}}>Done</Text>
              
              </Button>
             
</Animated.View>

</View>


  
)


}



}




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
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

console.log(this.props.loading)
    //header area starts from here*********************************************************************************
    return (

      <View style={{height:windowHeight}}>
    


<Loader />






{/* information model starts from here */}

    <View style={styles.centeredView}>
  <Modal
    animationType="slide"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      // Alert.alert("");
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>These are the details of <Text style={{fontWeight:'bold'}}>{this.props.Name}</Text>, by pressing Edit Button you can proceed with different actions.</Text>

        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            this.setModalVisible(modalVisible=false);
          }}
        >
          <Text style={styles.textStyle}>Okay</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>

</View>

{/* ends here */}










{/* model starts from here */}



<Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => this.hidemodal(hide=false)}
            presentationStyle={'formSheet'}
           >




<ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>
<View>
<View style={styles.modalbutton}>

<Button transparent 
onPress={() => {this.hidemodal(hide=false)}}>
 <Text style={{fontSize:18,color:'#364b73'}}>Cancel</Text>
              </Button>
             
</View>

</View>

{this.button_visible()}
<Content>

<View style={{flexDirection:"column",marginTop:'7%'}}>
<View style={{justifyContent:"center",alignItems:'center'}}>
                <Text style={{ color:'#364b73',fontSize:20, fontWeight:'bold',}}>
                Edit information
                </Text>
           
                </View>

<Form style={{marginTop:'7%'}}>
            <Item inlineLabel>
              <Label style={styles.font_decore}>Name</Label>
              <Input 
               placeholder={this.props.Name}
              onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_name',value})}
              value={this.props.redux_name}
         
              autoCorrect={false}
              />
            </Item>
            <Item inlineLabel>
              <Label style={styles.font_decore}>Father Name</Label>
              <Input 
placeholder={this.props.Father_name}
onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_fname',value})}
              value={this.props.redux_fname}
              autoCorrect={false}
/>
            </Item>


            <Item inlineLabel>
              <Label style={styles.font_decore}>Admission Date</Label>
              {/* <Input 
                placeholder={this.props.Admission_date}
                onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_admission',value})}
              value={this.props.redux_admission}
              autoCorrect={false}
                
              /> */}



              <DatePicker
            defaultDate={new Date(2012,4,4)}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2021, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"slide"}
            androidMode={"default"}
            placeHolderText={this.props.Admission_date}
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "gray" }}
            onDateChange={(value)=>{this.props.date_picker({key:'admission_picker',value})}}
            disabled={false}
       
            
            />
{/* <Text>{this.props.redux_admission}</Text> */}


            </Item>
            <Item inlineLabel>
              <Label style={styles.font_decore}>Graduation Date</Label>
              {/* <Input 
placeholder={this.props.Graduation_date}
onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_graduation',value})}
              value={this.props.redux_graduation}
              autoCorrect={false}
/> */}



<DatePicker
            defaultDate={new Date(2012,4,4)}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2021, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"slide"}
            androidMode={"default"}
            placeHolderText={this.props.Graduation_date}
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "gray" }}
            onDateChange={(value)=>{this.props.date_picker({key:'graduation_picker',value})}}
            disabled={false}
          
            
            />





            </Item>


            <Item inlineLabel>
              <Label style={styles.font_decore}>Email</Label>
              <Input 
                placeholder={this.props.Email_address}
                onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_email',value})}
              value={this.props.redux_email}
              autoCorrect={false}
              />
            </Item>
            <Item inlineLabel>
              <Label style={styles.font_decore}>CNIC</Label>
              <Input 
placeholder={this.props.Cnic}
onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_cnic',value})}
              value={this.props.redux_cnic}
              autoCorrect={false}

/>
            </Item>



            <Item inlineLabel>
              <Label style={styles.font_decore}>Passport Num</Label>
              <Input 
                placeholder={this.props.Passport_num}


                onChangeText={(value)=>this.props.AlumniSystemForm({key:'redux_passport',value})}
              value={this.props.redux_passport}
              autoCorrect={false}


              />
            </Item>
            

            <Item inlineLabel>
            <Label style={ styles.font_decore}>Status</Label>

              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder={this.props.Status}
                placeholderStyle={{ color: "#364b73" }}
                placeholderIconColor="#364b73"
                headerBackButtonText={'Cancel'}
                selectedValue={this.props.redux_status}
                onValueChange={(value)=>{this.props.picker_form(value)}}
               
               >
                <Picker.Item label="Verified" value="Verified" />
                <Picker.Item label="Not Verified" value="Not Verified" />
          
              </Picker>
            </Item>



          </Form>
            





</View>



</Content>




</ImageBackground>
          </Modal>

{/* model ends here */}





<ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
     height:windowHeight
        }}>

{this.headerfunction()}





      
 
      



{/* {this.error_handler()} */}






{/* <View style={{
backgroundColor:'#364b73',
height:"300%",
borderBottomLeftRadius:120,
borderBottomRightRadius:100,
// borderTopLeftRadius:100,
borderTopRightRadius:100,
paddingTop:'3%',
alignItems:'flex-start',
paddingLeft:'4%'
}}>
         
           
                <Text style={{fontSize:33,fontWeight:'bold',color:'white'}}>
                {this.props.Name}
                </Text>
                <Text style={{fontSize:16,color:'white'}}>
                {this.props.Email_address}
                </Text>
                </View> */}


                {/* <View style={{
                
                position:'absolute',
                left:'%',
                top:'10%',
                width:100,
                height:60,
                borderRadius:100,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center',
                 shadowOpacity:1,
      shadowRadius:1,

       shadowOffset: {
          width: 1,
          height: 3.5,
        },
        elevation: 6,
    
                
                }}>
<Text style={{fontSize:20,fontWeight:'bold',color:'#364b73'}}> {this.props.Name.toString().substr(0,7)}</Text>
</View> */}

<View style={{
  width:windowWidth,
height:windowHeight,
flex:1
}}>




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
                 {this.props.Name}
                </Text>
                
                <Text style={{fontSize:16,
                
                textAlign:'left',
                color:'black',
                }}>
                 {this.props.Email_address}
                </Text>
</View>



<View style={{
 
width:'96%',
backgroundColor:'white',
left:'2%',

     borderTopLeftRadius:10,
  height:'12%'

}}>
<ScrollView alwaysBounceVertical>

<Text style={{
  fontSize:17,
textAlign:'left',
padding:'2%',

}}>
<Text style={{fontWeight:'bold',color:'#364b73'}}>{this.props.Name}</Text> son of <Text style={{fontWeight:'bold',color:'#364b73'}}>{this.props.Father_name}</Text> took admission on the date: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(this.props.Admission_date).format('DD-MM-YYYY')}</Text>  and was successfully able to complete his graduation dated: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(this.props.Graduation_date).format('DD-MM-YYYY')}</Text> and his degree is {this.props.Status}.                  
   
  </Text>
</ScrollView>

  </View>






<View style={{ aspectRatio:6/7.6, width:'96%',left:'2%'}}>

            

<ScrollView>
  


                <List>
               
                
            <ListItem itemDivider>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Related Information</Text>
            </ListItem>                    
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Registration No#:</Text>
              </Left>
            <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Registration_num}</Text>
            </Body>
            
            </ListItem>
           
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>CNIC:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Cnic}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Passport No#:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Passport_num}</Text>
              </Body>
          
            </ListItem>
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Passport No#:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Passport_num}</Text>
              </Body>
          
            </ListItem>

        
            
        


            <ListItem itemDivider>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Admission Information</Text>
            </ListItem> 

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Admission:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{moment(this.props.Admission_date).format('DD-MM-YYYY')}</Text>
              </Body>
          
            </ListItem>
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Graduation:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{moment(this.props.Graduation_date).format('DD-MM-YYYY')}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Status:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Status}</Text>
              </Body>
          
            </ListItem>


            <ListItem itemDivider>
              <Text style={{fontSize:16,fontWeight:'bold'}}>System Information</Text>
            </ListItem> 


            <ListItem>
            <Left>
            <Text style={{color:'#364b73',fontSize:12}}>Created:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold',fontSize:12}}>{moment(this.props.Created_at).format('MMMM Do YYYY, h:mm:ss a')}</Text>
              </Body>
          
            </ListItem>


            <ListItem>
            <Left>
            <Text style={{color:'#364b73',fontSize:12}}>Updated:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold',fontSize:12}}>{moment(this.props.Updated_at).format('MMMM Do YYYY, h:mm:ss a')}</Text>
              </Body>
          
            </ListItem>





            








          </List>
        



          

          </ScrollView> 
           
         

</View>
  




</View>

<View></View>


<View style={{position: 'absolute',                                          
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






{this.Different_Role_Views()}



</ImageBackground>

{this.props.loading}

</View>
  
     






    );
  }
}

const styles = StyleSheet.create({


  font_decore:{
  color:'#364b73',
  fontWeight:'bold',
  fontSize:16,
},



  modalbutton:{

    justifyContent:"center",
    alignItems:'flex-start',
    marginLeft:'7%',
    marginTop:'10%'
  
    },

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
  padding: 35,
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
  const {redux_name,
    redux_fname,
    // redux_admission,
    // redux_graduation,
    redux_email,
    redux_cnic,
    redux_passport,
    redux_status,
    picker_value,
    admission_picker,
    graduation_picker,
  } = state.FormHandler;

  const{
    alumni_data,
    UpdateResponse,
    loading,
    deletedData,

  } = state.Crud_Data;


return{
alumni_data:alumni_data,
redux_name:redux_name,
redux_fname:redux_fname,
redux_admission:admission_picker,
redux_graduation:graduation_picker,
redux_email:redux_email,
redux_cnic:redux_cnic,
redux_passport:redux_passport,
redux_status:picker_value,
update_response:UpdateResponse,
loading:loading,
delete_response:deletedData,

}

}



export default connect(mapStatetoProps,{AlumniSystemForm,listData,Delete,Update,picker_form,date_picker}) (AlumniShowScreen);