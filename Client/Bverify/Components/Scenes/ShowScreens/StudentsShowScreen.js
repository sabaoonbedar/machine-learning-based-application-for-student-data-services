
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
import{students_delete,Students_Form,listData,Students_Update,picker_form,date_picker,dynamic_picker_form} from '../../Redux/Actions';
import moment from "moment";
import email from 'react-native-email';
import Loader from '../Loader';
import {AsyncStorage} from 'react-native';

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



import {Actions} from 'react-native-router-flux';

 class StudentsShowScreen extends Component {
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
//========================starts here==========================================



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
    "Are you sure you want to delete",
    this.props.Name,
    [
      {
        text: "Yes",
        onPress: () => {


this.props.students_delete(this.props.id);


setTimeout(()=>{
Actions.pop()

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

    
    
    
    )
    
    
    
    }
    
    
    
    
    
    }
    
    
    
    






  setModalVisible = (visible) => {
    console.log(visible)
 this.setState({ modalVisible: visible });
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
            <Icon name="arrow-back" onPress={()=>{Actions.pop()}} />
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
if(this.props.students_update_response){
    if(this.props.students_update_response.errors){
        console.log(this.props.students_update_response.errors)
          this.setState({isVisible:true})
   

// Toast.show({ 
          //   text:[this.props.students_update_response.errors.name],
            
          //   buttonText: "Okay",
          //   duration: 7000,
          //   position:'bottom',
          //   // type: "danger",
          //   textStyle: { fontWeight:"bold" },
    
          // })
if(this.props.students_update_response.errors.name){
           Alert.alert(this.props.students_update_response.errors.name.toString())
            }
         else if(this.props.students_update_response.errors.father_name){
              Alert.alert(this.props.students_update_response.errors.father_name.toString())
            }
         else if(this.props.students_update_response.errors.registration_num){
              Alert.alert(this.props.students_update_response.errors.registration_num.toString())
            }
         else if(this.props.students_update_response.errors.admission_date){
              Alert.alert(this.props.students_update_response.errors.admission_date.toString())
            }
         else if(this.props.students_update_response.errors.batch){
              Alert.alert(this.props.students_update_response.errors.batch.toString())
            }
         else if(this.props.students_update_response.errors.email_address){
              Alert.alert(this.props.students_update_response.errors.email_address.toString())
            }
        else if(this.props.students_update_response.errors.gender){
              Alert.alert(this.props.students_update_response.errors.gender.toString())
            }
        else if(this.props.students_update_response.errors.programe){
              Alert.alert(this.props.students_update_response.errors.programe.toString())
            }
       else if(this.props.students_update_response.errors.contact_no){
              Alert.alert(this.props.students_update_response.errors.contact_no.toString())
            }


            else if(this.props.students_update_response.errors.address){
              Alert.alert(this.props.students_update_response.errors.address.toString())
            }

            else if(this.props.students_update_response.errors.board){
              Alert.alert(this.props.students_update_response.errors.board.toString())
            }

            else if(this.props.students_update_response.errors.ssc_total){
              Alert.alert(this.props.students_update_response.errors.ssc_total.toString())
            }

            else if(this.props.students_update_response.errors.ssc_obtain){
              Alert.alert(this.props.students_update_response.errors.ssc_obtain.toString())
            }
            else if(this.props.students_update_response.errors.hssc_total){
              Alert.alert(this.props.students_update_response.errors.hssc_total.toString())
            }
            else if(this.props.students_update_response.errors.hssc_obtain){
              Alert.alert(this.props.students_update_response.errors.hssc_obtain.toString())
            }



      }else if(this.props.students_update_response.code=='300'){

        this.showmodal({isVisible:false})
        Actions.pop();
       
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
        '\n Email: '+this.props.Email_address+'\n Admission: '+moment(this.props.Admission_date).format('DD-MM-YYYY')+'\n Address: '+this.props.Address+'\n Gender: '+this.props.Gender+'\n Contact: '+this.props.Contact+
        '\n Programe: '+this.props.Programe+'\n Batch: '+this.props.Batch+'\n Board: '+this.props.Board+'\n SSC Total: '+this.props.Ssc_total+'\n SSC Obtain: '+this.props.Ssc_obtain+'\n HSSC Total: '+this.props.Hssc_total+
        '\n HSSC Obtain: '+this.props.Hssc_obtain
     
       
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
  //     selected: this.props.redux_choose
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
s_email=this.props.redux_email;
s_batch=this.props.redux_batch;
s_gender=this.props.redux_gender;
s_programe=this.props.redux_programe;
s_contact=this.props.redux_contact;
s_address=this.props.redux_address;
s_board = this.props.redux_board;
ssc_total=this.props.redux_ssc_total;
ssc_obtain=this.props.redux_ssc_obtain;
hssc_total=this.props.redux_hssc_total;
hssc_obtain=this.props.redux_hssc_obtain;


this.props.Students_Update(s_id,s_name,s_fname,s_admission,s_email,s_batch,s_gender,s_programe,s_contact,s_address,s_board,ssc_total,ssc_obtain,hssc_total,hssc_obtain)

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

if(


 this.props.redux_name
 || this.props.redux_fname
 ||this.props.redux_admission
 ||this.props.redux_email
 ||this.props.redux_batch
 ||this.props.redux_gender
 ||this.props.redux_programe
 ||this.props.redux_contact
 ||this.props.redux_address
 ||this.props.redux_board
 ||this.props.redux_ssc_total
 ||this.props.redux_ssc_obtain
 ||this.props.redux_hssc_total
 ||this.props.redux_hssc_obtain



  ){

return(
 

<View>
<Animated.View style={{position:"absolute",right:'10%',bottom:'10%',opacity:this.state.Done_Button_value}}>
{this.Done_button_animation()}

<Button transparent 


onPress={()=>{


  this.update_function();
  // this.setState({Respons_info:this.props.students_update_response.errors})
 
 
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



    //header area starts from here*********************************************************************************
    return (

      <View style={{height:windowHeight}}>
    
<Loader/>

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
onChangeText={(value)=>this.props.Students_Form({key:'redux_name',value})}
              value={this.props.redux_name}
              autoCorrect={false}
/>
            </Item>



            <Item inlineLabel>
              <Label style={styles.font_decore}>Father Name</Label>
              <Input 
placeholder={this.props.Father_name}
onChangeText={(value)=>this.props.Students_Form({key:'redux_fname',value})}
              value={this.props.redux_fname}
              autoCorrect={false}
/>
            </Item>


            <Item inlineLabel>
              <Label style={styles.font_decore}>Admission Date</Label>
              {/* <Input 
                placeholder={this.props.Admission_date}
                onChangeText={(value)=>this.props.Students_Form({key:'redux_admission',value})}
              value={this.props.redux_admission}
              autoCorrect={false}
                
              /> */}



              <DatePicker
            defaultDate={new Date(2012,4,4)}
            // minimumDate={new Date(2018, 1, 1)}
            // maximumDate={new Date(2021, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
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
              <Label style={styles.font_decore}>Email</Label>
              <Input 
                placeholder={this.props.Email_address}
                onChangeText={(value)=>this.props.Students_Form({key:'redux_email',value})}
              value={this.props.redux_email}
              autoCorrect={false}
              />
            </Item>
            <Item inlineLabel>
              <Label style={styles.font_decore}>Contact_No</Label>
              <Input 
placeholder={this.props.Contact}
onChangeText={(value)=>this.props.Students_Form({key:'redux_contact',value})}
              value={this.props.redux_contact}
              autoCorrect={false}

/>
            </Item>





            <Item inlineLabel>
            <Label style={ styles.font_decore}>Programe</Label>

              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder={this.props.Programe}
                placeholderStyle={{ color: "#364b73" }}
                placeholderIconColor="#364b73"
                headerBackButtonText={'Cancel'}
                selectedValue={this.props.redux_programe}
                onValueChange={(value)=>this.props.dynamic_picker_form({key:'redux_programe',value})}

               >
                <Picker.Item label="BS" value="BS" />
                <Picker.Item label="MS" value="MS" />
                <Picker.Item label="PHD" value="PHD" />
                <Picker.Item label="MSC" value="MSC" />
              </Picker>
            </Item>








            <Item inlineLabel>
              <Label style={styles.font_decore}>Address</Label>
              <Input 
                placeholder={this.props.Address}


                onChangeText={(value)=>this.props.Students_Form({key:'redux_address',value})}
              value={this.props.redux_address}
              autoCorrect={false}


              />
            </Item>
            

            <Item inlineLabel>
            <Label style={ styles.font_decore}>Gender</Label>

              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder={this.props.Gender}
                placeholderStyle={{ color: "#364b73" }}
                placeholderIconColor="#364b73"
                headerBackButtonText={'Cancel'}
                selectedValue={this.props.redux_gender}
                onValueChange={(value)=>this.props.dynamic_picker_form({key:'redux_gender',value})}
               
               >
               
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
          
              </Picker>
            </Item>



            <Item inlineLabel>
              <Label style={styles.font_decore}>Current Batch</Label>
              <Input 
placeholder={this.props.Batch}
onChangeText={(value)=>this.props.Students_Form({key:'redux_batch',value})}
              value={this.props.redux_batch}
              autoCorrect={false}
/>
            </Item>



            <Item inlineLabel>
              <Label style={styles.font_decore}>Board</Label>
              <Input 
placeholder={this.props.Board}
onChangeText={(value)=>this.props.Students_Form({key:'redux_board',value})}
              value={this.props.redux_board}
              autoCorrect={false}
/>
            </Item>


            <Item inlineLabel>
              <Label style={styles.font_decore}>SSC Total</Label>
              <Input 
placeholder={this.props.Ssc_total.toString()}
onChangeText={(value)=>this.props.Students_Form({key:'redux_ssc_total',value})}
              value={this.props.redux_ssc_total}
              autoCorrect={false}
/>
            </Item>



           
            <Item inlineLabel>
              <Label style={styles.font_decore}>SSC Obtain</Label>
              <Input 
placeholder={this.props.Ssc_obtain.toString()}
onChangeText={(value)=>this.props.Students_Form({key:'redux_ssc_obtain',value})}
              value={this.props.redux_ssc_obtain}
              autoCorrect={false}
/>
            </Item>






            <Item inlineLabel>
              <Label style={styles.font_decore}>HSSC Total</Label>
              <Input 
placeholder={this.props.Hssc_total.toString()}
onChangeText={(value)=>this.props.Students_Form({key:'redux_hssc_total',value})}
              value={this.props.redux_hssc_total}
              autoCorrect={false}
/>
            </Item>



           
            <Item inlineLabel>
              <Label style={styles.font_decore}>HSSC Obtain</Label>
              <Input 
placeholder={this.props.Hssc_obtain.toString()}
onChangeText={(value)=>this.props.Students_Form({key:'redux_hssc_obtain',value})}
              value={this.props.redux_hssc_obtain}
              autoCorrect={false}
/>
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
<Text style={{fontWeight:'bold',color:'#364b73'}}>{this.props.Name}</Text> son of <Text style={{fontWeight:'bold',color:'#364b73'}}>{this.props.Father_name}</Text> took admission on the date: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(this.props.Admission_date).format('DD-MM-YYYY')}</Text> in the programe of <Text style={{fontWeight:'bold',color:'#364b73'}}>{this.props.Programe},in Department of Computer Science.</Text>       
   
  </Text>
</ScrollView>

  </View>






<View style={{ aspectRatio:6/7.6, width:'96%',left:'2%'}}>

            

<ScrollView>
  


                <List>
               
                
            <ListItem itemDivider>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Personal Information</Text>
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
            <Text style={{color:'#364b73'}}>Gender:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Gender}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Address:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Address}</Text>
              </Body>
          
            </ListItem>
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Contact No#:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Contact}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Email Address:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Email_address}</Text>
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
            <Text style={{color:'#364b73'}}>Current Programe:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Programe}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Current Batch:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Batch}</Text>
              </Body>
          
            </ListItem>


            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Semester/Year:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Semester}</Text>
              </Body>
          
            </ListItem>





            <ListItem itemDivider>
              <Text style={{fontSize:16,fontWeight:'bold'}}>FA/FSC Information</Text>
            </ListItem> 

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>Board:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Board}</Text>
              </Body>
          
            </ListItem>
            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>SSC Total:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Ssc_total}</Text>
              </Body>
          
            </ListItem>

            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>SSC Obtain:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Ssc_obtain}</Text>
              </Body>
          
            </ListItem>


            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>HSSC Total:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Hssc_total}</Text>
              </Body>
          
            </ListItem>


            <ListItem>
            <Left>
            <Text style={{color:'#364b73'}}>HSSC Obtain:</Text>
              </Left>
              <Body>
              <Text style={{color:'#364b73',fontWeight:'bold'}}>{this.props.Hssc_obtain}</Text>
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
  const {
    redux_name,
    redux_fname,
    redux_email,
    redux_contact,
    redux_programe,
    redux_gender,
    admission_picker,
    redux_address,
    redux_batch,
    redux_board,
    redux_ssc_total,
    redux_ssc_obtain,
    redux_hssc_total,
    redux_hssc_obtain,
  

  } = state.FormHandler;

  const{
    students_update_response,
    students_delete,
  } = state.Crud_Data;


return{


students_update_response:students_update_response,
delete_response:students_delete,

redux_name:redux_name,
redux_fname:redux_fname,
redux_admission:admission_picker,
redux_contact:redux_contact,
redux_email:redux_email,
redux_gender:redux_gender,
redux_programe:redux_programe,
redux_address:redux_address,
redux_batch:redux_batch,
redux_board:redux_board,
redux_ssc_total:redux_ssc_total,
redux_ssc_obtain:redux_ssc_obtain,
redux_hssc_total:redux_hssc_total,
redux_hssc_obtain:redux_hssc_obtain,





}

}



export default connect(mapStatetoProps,{Students_Form,students_delete,Students_Update,date_picker,dynamic_picker_form}) (StudentsShowScreen);