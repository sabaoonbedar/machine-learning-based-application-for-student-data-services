/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Modal,
  Alert
} from 'react-native';


import { Container,
   Header, 
   Left, 
   Body, 
   Right,
    Button,
     Title,
      Icon, 
      Content,
      List,
      ListItem 
    } from 'native-base';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import moment from "moment";

import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import Helper from '../TextRecognition/helper';
import commonStyles from './commonStyles';
import Iconionic from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import Camera, { Constants } from "../TextRecognition/TextDetectorCamera";
import WordSelector from "./WordSelectorSearch";
import { Actions } from 'react-native-router-flux';
import IconEnt from 'react-native-vector-icons/Entypo';
import {generate_barcode,students_ocr_information} from '../../Redux/Actions'






class RecognizerSearch extends React.Component {
  constructor(props) {
    super(props);
  
    // Add in showCamera, showWordList and recogonizedText state
    this.state = {
      userWord: '',
      errorMsg: '',
      loading: false, 
       definition: null,
       showCamera: false, 
       showWordList: false, 
       recogonizedText: null,
       information_modal:false,

      
      
      
      
      };
  }






  setInformationModalVisible = (visible) => {
    // console.log(this.props.scan_response)
    if(this.props.students_information){
      if(this.props.students_information.length){
    this.setState({ information_modal: visible });
      }else{
   
        
        Alert.alert('We do not have any information for the recognized word in our records')
    
      
        }
  
  }

    else{
   
      Alert.alert('There seems some problem from the server side')
  
    
      }
  }









  headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={styles.headerButtonsContainer}>
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                        <Icon name="arrow-back"   />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title style={{fontSize:13}}>Search Students</Title>
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
                        <Icon name="arrow-back"  />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title style={{fontSize:13}}>Search Students</Title>
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
    

//this function is for wordselector class

onCancelProcess=()=>{

  this.setState({showWordList: false});


}

componentDidMount(){
  if(this.props.wordListOff==false){
    console.log(this.props.wordListOff)
  this.setState({showWordList: this.props.wordListOff});
  }
}




  onUserWordChange(text) {
    this.setState({userWord: text});
  }

//   async onSearch() {
//     if(this.state.userWord.length <= 0) {
//       this.setState({errorMsg: 'Please specify the word to lookup.'})
//       return;
//     }

//     try {
//       this.setState({loading: true});
//       let lemmas = await Api.getLemmas(this.state.userWord);
//       console.log('Lemmas: ', lemmas);
//       if(lemmas.success) {
//         let headWord = Helper.carefullyGetValue(lemmas, ['payload', 'results', '0', 'lexicalEntries', '0', 'inflectionOf', '0', 'id'], '');
//         console.log('Headword is: ', headWord);
//         if(headWord.length > 0) {
//           let wordDefinition = await Api.getDefinition(headWord);
//           if(wordDefinition.success) {
//             this.setState({errorMsg: '', loading: false, definition: wordDefinition.payload});
//             console.log('Word Definition: ', wordDefinition.payload);
//           }
//           else {
//             this.setState({errorMsg: 'Unable to get result from Oxford: ' + wordDefinition.message, loading: false, definition: null});
//           }
//         }
//         else {
//           this.setState({errorMsg: 'Invalid word. Please specify a valid word.', loading: false, definition: null});
//         }
//       }
//       else {
//         this.setState({errorMsg: 'Unable to get result from Oxford: ' + lemmas.message, loading: false, definition: null});
//       }
//     } catch (error) {
//       console.log('Error: ', error);
//       this.setState({loading: false, errorMsg: error.message, definition: null});
//     }
//   }

  
  // Receive the recogonizedText from the Camera module
  onOCRCapture(recogonizedText) {
    console.log('onCapture', recogonizedText);
    this.setState({showCamera: false, showWordList: Helper.isNotNullAndUndefined(recogonizedText), recogonizedText: recogonizedText});
  }

  // Author Sabaoon bedar
  // Receive the word selected by the user via WordSelector component
  onWordSelected(word) {
    this.setState({showWordList: true, userWord: word});
    if(word.length > 0) {

this.props.students_ocr_information(word)

      setTimeout(() => {
        
      this.setInformationModalVisible(true)

      }, 500);
   
    }
  }

  render() {


    const { height, width } = Dimensions.get('window');
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    return (
      <>



<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.information_modal}
          onRequestClose={() => {
           console.log('close')
          }}
 >


{/* starts from here */}

<View style={{height:windowHeight}}>
    




    {_.isArray(this.props.students_information) ? this.props.students_information.map((item)=>{return(

    
    
    <ImageBackground source={require('../../Assets/shap.jpg')} style={{
            resizeMode:"cover",
         height:windowHeight
            }}>
    
   
    <View style={{
      width:windowWidth,
    height:windowHeight,
    flex:1,
    top:'7%',
    }}>
    
    
    

    <View style={{flexDirection:"row"}}>
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
                    
    {item.name}
               </Text>
    </View>
    

<View  style={{position:"absolute",top:'8%',right:'10%'}}>
    <TouchableOpacity onPress={()=>{
this.setInformationModalVisible(false);
    }}>
<Text>
<IconEnt name="cross"  color={'#4f83cc'} size={34}/>  
</Text>

</TouchableOpacity>
 
</View>
    


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
<Text style={{fontWeight:'bold',color:'#364b73'}}>{item.name}</Text> son of <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.father_name}</Text> took admission on the date: <Text style={{fontWeight:'bold',color:'#364b73'}}>{moment(item.admission_date).format('DD-MM-YYYY')}</Text> in the programe of <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.programe}, in Department of Computer Science.</Text>.           
                      
       
      </Text>
    </ScrollView>
    
      </View>
    
    
     
    
    
    
    <View style={{ flex:1, width:'96%',left:'2%'}}>
    
                
    
    <ScrollView>
      
    
    
                    <List>
                   
                    
                <ListItem itemDivider  style={{backgroundColor:'#364b73',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Personal Information</Text>
                </ListItem>                    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Registration No#:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.registration_num}</Text>
                </Body>
                
                </ListItem>
               
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Name:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.name}</Text>
                </Body>
                
                </ListItem>
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Father Name:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.father_name}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>
               
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Email Address:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.email_address}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>
    
            
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Contact:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.contact_no}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>



                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Gender:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.gender}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>


                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Address:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.address}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>


            
    
                <ListItem itemDivider  style={{backgroundColor:'#364b73',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> Academic Information</Text>
                </ListItem> 
    

                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Programe:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.programe}</Text>
                  </Body>
              
                </ListItem>



                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Batch:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.batch}</Text>
                  </Body>
              
                </ListItem>


                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Semester/Year:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.semester}</Text>
                  </Body>
              
                </ListItem>
    
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Admission:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.admission_date}</Text>
                  </Body>
              
                </ListItem>
    
                
    
                <ListItem itemDivider  style={{backgroundColor:'#364b73',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> FA/FSC Information</Text>
                </ListItem> 

                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Board:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.board}</Text>
                  </Body>
              
                </ListItem>


                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>SSC Total:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.ssc_total}</Text>
                  </Body>
              
                </ListItem>

                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>SSC Obtain:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.ssc_obtain}</Text>
                  </Body>
              
                </ListItem>

    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>HSSC Total:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.hssc_total}</Text>
                  </Body>
              
                </ListItem>


                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>HSSC Obtain:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.hssc_obtain}</Text>
                  </Body>
              
                </ListItem>





              </List>
            
    
    
    
              
    
              </ScrollView> 
               
             
    
    </View>
      
    
    
    
    
    </View>
    
    <View></View>
    
    

    
    </ImageBackground>
    
    )}):<ActivityIndicator/>
    
    
    
    }

    </View>
      
         
    
    
    






 </Modal>









      <ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>
<View style={{flex:1,}}>
{this.headerfunction()}



       
         <Content>
            



  
          

            {/* <View style={styles.searchBox}>
              <TextInput style={styles.searchInput}
                onChangeText={text => this.onUserWordChange(text)}
                placeholder={'key for making barcode'}
                value={this.state.userWord}
              />
         
            </View> */}

            {   Platform.OS == 'ios'?
         
         <View style={{height:230,width:230, backgroundColor:'#364b73', borderRadius:200,top:height/4.3, justifyContent:'center',alignSelf:'center',}}>
          <View style={{height:230,width:190, backgroundColor:'#2f72ed', borderRadius:200,top:height/700, justifyContent:'center',alignSelf:'center',shadowOpacity:1}}>

</View>
</View>
:

<View></View>


     }      

{ 
Platform.OS == 'ios'?

<TouchableWithoutFeedback style={{height:30}} onPress={() => {
              this.setState({showCamera: true});
            }} >        
<View style={{
height:200,
width:200,
borderRadius:200,
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:height/4,
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',
shadowOpacity:1,
elevation:7,
shadowOffset:{
width:2,
height:2
},
borderWidth:0.2,
shadowColor:'#364b73'
}}>
        {/* <Text style={{color:'#4f83cc',justifyContent:"center",alignItems:"center",fontSize:35}}>Generate {'\n'} barcode</Text> */}
        <IconMat name="database-search" size={140} color="#364b73"  />
                        <Text style={{color:'#364b73',justifyContent:"center",alignItems:"center",fontSize:28,position:'absolute',top:140}}>Search</Text>

</View>
</TouchableWithoutFeedback>  
:

<TouchableOpacity onPress={() => {
              this.setState({showCamera: true});
            }}


style={{
height:200,
width:200,
marginTop:'50%',
borderRadius:200,
justifyContent:'center',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',

shadowOpacity:1,
elevation:7,
shadowOffset:{
width:2,
height:2
},
borderWidth:0.4,
shadowColor:'#364b73',
borderColor:'#364b73'


}}>

<IconMat name="database-search" size={140} color="#364b73"  />
                        <Text style={{color:'#364b73',justifyContent:"center",alignItems:"center",fontSize:28,position:'absolute',top:140}}>Search</Text>


</TouchableOpacity>

}
            <View style={{minHeight: 10, maxHeight: 10}}></View>

            {/* <Button
              title="Search"
              onPress={() => this.onSearch()}
            /> */}

            {
              this.state.errorMsg.length > 0 &&
              <Text style={commonStyles.errMsg}>{this.state.errorMsg}</Text>
            }

            {/* Display word definition as custom component */}
            </Content>
            
            </View></ImageBackground>
        {
   
          // Display the camera to capture text
          this.state.showCamera &&
          <Camera
            cameraType={Constants.Type.back}
            flashMode={Constants.FlashMode.off}
            autoFocus={Constants.AutoFocus.on}
            whiteBalance={Constants.WhiteBalance.auto}
            ratio={'4:3'}
            quality={0.5}
            imageWidth={800}
            enabledOCR={true}
            onCapture={(data, recogonizedText) => this.onOCRCapture(recogonizedText)} 
            onClose={_ => {
              this.setState({showCamera: false});
            }}
          />
        }
        {
 
          // Display the word list capture by the camera and allow user to select
          this.state.showWordList &&
         
          <WordSelector wordBlock={this.state.recogonizedText} 
          onWordSelected={(word) => this.onWordSelected(word)} 
          showWordList={(value)=>{this.setState({showWordList:value})}} 
          showCamera={(value)=>{this.setState({showCamera:value})}} 

          />

        }
        {
          this.state.loading &&
          <ActivityIndicator  size="large" color={'#219bd9'} />
        }
      </>
    );
  }
}





const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingLeft: 4, 
    paddingRight: 4, 
    paddingTop: 2, 
    paddingBottom: 2,
    color:'black',
    borderWidth:4,
  },
  searchInput: {
    padding: 0,
    flex: 1
  },
  // 20200502 - JustCode:
  // Camera icon style
  searchCamera: {
    maxWidth: 50,
    marginLeft: 5,
    padding: 0,
    alignSelf: 'center'
  }
});



const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;

  const{
    Ocr_Value,
    
    wordListOff,
    students_information,
  
  } = state.BarcodeGenerator;



return{
  wordListOff:wordListOff,

  Ocr_Value:Ocr_Value,

  students_information:students_information,
}

}



export default connect(mapStatetoProps,{generate_barcode,students_ocr_information}) (RecognizerSearch);